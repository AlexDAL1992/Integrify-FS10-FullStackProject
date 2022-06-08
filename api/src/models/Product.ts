/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  name: string
  description: string
  categories: string[]
  variants: string[]
  sizes: string[]
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true,
    minlength: 5,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
  },
  categories: [String],
  variants: [String],
  sizes: [String],
})

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export default mongoose.model<ProductDocument>('Products', productSchema)
