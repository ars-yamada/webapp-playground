import { schemas } from '@core/schemas'
import type { User } from '@core/types'

// Mock data for demonstration
const mockUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    createdAt: new Date('2024-01-01'),
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    createdAt: new Date('2024-01-02'),
  },
]

export default defineEventHandler(async (event) => {
  try {
    // Sleep for 3000 ms
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const users = mockUsers
    // validate data using Zod schema
    return schemas.UserSchema.array().parse(users)
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch users',
    })
  }
})
