import express from 'express'

import {
  createUser,
  findAllUsers,
  findUserByEmail,
  deleteUser,
} from '../controllers/user'

const userRouter = express.Router()

userRouter.post('/', createUser)
userRouter.get('/', findAllUsers)
userRouter.get('/:email', findUserByEmail)
userRouter.delete('/:userId', deleteUser)

export default userRouter
