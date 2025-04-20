export type Email = `${string}@${string}.${string}`

export interface DBEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

export interface DBUser extends DBEntity {
  name: string
  email: Email
  password: string
}

export interface DBChat extends DBEntity {
  ownerId: DBUser['id']
  name: string
}

export type MessageType = 'system' | 'user'

export interface DBMessage extends DBEntity {
  chatId: DBChat['id']
  type: MessageType
  message: string
}
