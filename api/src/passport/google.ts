import User, { Role, UserDocument } from '../models/User'
import UserService from '../services/user'
const GoogleStrategy = require('passport-google-id-token')
// import GoogleStrategy from 'passport-google-id-token'

const isAdmin = (domain: string) => {
  if (domain === 'integrify.io') return true
  return false
}

const loginWithGoogle = () => {
  return new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
    },
    async (parsedToken: any, googleID: any, done: any) => {
      try {
        let user = await UserService.findUserByEmail(parsedToken.payload.email)

        if (!user) {
          user = {
            email: parsedToken.payload.email,
            firstname: parsedToken.payload.given_name,
            lastname: parsedToken.payload.family_name,
            role: isAdmin(parsedToken.payload.hd) ? Role.ADMIN : Role.USER,
          } as UserDocument

          const newUser = new User(user)
          await UserService.createUser(newUser)
        }
        done(null, user)
      } catch (error) {
        done(error)
      }
    }
  )
}

export default loginWithGoogle
