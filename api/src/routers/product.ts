import express from 'express'

import {
  createProduct,
  findProductById,
  deleteProduct,
  findAllProducts,
  updateProduct,
} from '../controllers/product'

const productRouter = express.Router()

// Every path we define here will get /api/v1/products prefix
productRouter.get('/', findAllProducts)
productRouter.get('/:movieId', findProductById)
productRouter.put('/:movieId', updateProduct)
productRouter.delete('/:movieId', deleteProduct)
productRouter.post('/', createProduct)

export default productRouter
