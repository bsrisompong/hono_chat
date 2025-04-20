import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { timing } from 'hono/timing'

const app = new Hono()

// Middleware
app.use('*', timing())
app.use('*', logger())

app.get('/', c => {
  return c.json({
    message: 'Hello Hono!',
  })
})

export default app
