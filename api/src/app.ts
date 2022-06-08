import express from 'express'
// import lusca from 'lusca' will be used later
import dotenv from 'dotenv'
import passport from 'passport'
import cors from 'cors'
import loginWithGoogle from './passport/google'

import productRouter from './routers/product'
import userRouter from './routers/user'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)

// Global middleware
app.use(apiContentType)
app.use(express.json())

// Use Google passport for login
app.use(passport.initialize())
passport.use(loginWithGoogle())
app.post(
  '/google-login',
  passport.authenticate('google-id-token', { session: false }),
  (req, res) => {
    res.json({ message: 'login done' })
  }
)

// Set up routers
app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
