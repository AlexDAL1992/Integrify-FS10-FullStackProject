import User, { UserDocument } from '../models/User'
import { NotFoundError } from '../helpers/apiError'

const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return user.save()
}

const findAllUsers = async (): Promise<UserDocument[]> => {
  return User.find().sort({ firstname: 1 })
}

const findUserByEmail = async (email: string): Promise<UserDocument | any> => {
  return User.findOne({ email })
}

export default {
  createUser,
  findAllUsers,
  findUserByEmail,
}
