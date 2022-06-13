import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user'
import productReducer from './reducers/product'
//import cartReducer from './reducers/cart'

const store = configureStore({
  reducer: {
    user: userReducer,
    //cart: cartReducer,
    product: productReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store