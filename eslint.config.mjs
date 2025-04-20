import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import unusedImports from 'eslint-plugin-unused-imports'
import baseConfig from '@hono/eslint-config'

export default tseslint.config({
  files: ['**/*.ts', '**/*.tsx'],
  ignores: [
    // '**/build/*.js',
    '*.queries.ts',
    'src/lib/db/schema/public/PublicSchema.ts',
  ],
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
    ...baseConfig,
  ],
  languageOptions: {
    ecmaVersion: 'latest',
    parserOptions: {
      project: ['./tsconfig.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
  plugins: {
    'unused-imports': unusedImports,
  },
  rules: {
    // unusedImports plugin
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
})
