import User, { UserDocument } from '../models/User'
import { NotFoundError } from '../helpers/apiError'

const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return user.save()
}

const findAllUsers = async (): Promise<UserDocument[]> => {
  return User.find().sort({ firstname: 1 })
}

const findUserByEmail = async (email: string): Promise<UserDocument | any> => {
  const foundUser = User.findOne({ email })
  if (!foundUser) {
    throw new NotFoundError(`User with email ${email} not found`)
  }
  return foundUser
}

const deleteUser = async (userId: string): Promise<UserDocument | any> => {
  const foundUser = User.findByIdAndDelete(userId)
  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }
  return foundUser
}

export default {
  createUser,
  findAllUsers,
  findUserByEmail,
  deleteUser,
}
