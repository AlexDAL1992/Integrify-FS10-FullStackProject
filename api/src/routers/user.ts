import express from 'express'

import { createUser, findAllUsers, findUserByEmail } from '../controllers/user'

const userRouter = express.Router()

userRouter.post('/', createUser)
userRouter.get('/', findAllUsers)
userRouter.get('/:email', findUserByEmail)

export default userRouter
