import { z } from 'zod'

// User schema for validation
const userSchemas = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  createdAt: z.date(),
})

export const schemas = {
  UserSchema: userSchemas,
}
