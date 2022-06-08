import mongoose, { Document } from 'mongoose'

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type UserDocument = Document & {
  email: string
  firstname: string
  lastname: string
  role: Role
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    index: true,
    required: true,
    minlength: 5,
  },
  firstname: {
    type: String,
    required: true,
    minlength: 1,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 1,
  },
  role: {
    type: String,
    enum: Role,
    required: true,
    default: Role.USER,
  },
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model<UserDocument>('Users', userSchema)
