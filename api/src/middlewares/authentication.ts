import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../util/secrets'

export default function authentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const auth = req.headers.authorization || ''
    const token = auth.split(' ')[1]

    const verifiedToken = jwt.verify(token, JWT_SECRET)
    req.user = verifiedToken
    next()
  } catch (error) {
    console.log(error)
    next(error)
  }
}
