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
productRouter.get('/:productId', findProductById)
productRouter.put('/:productId', updateProduct)
productRouter.delete('/:productId', deleteProduct)
productRouter.post('/', createProduct)

export default productRouter
