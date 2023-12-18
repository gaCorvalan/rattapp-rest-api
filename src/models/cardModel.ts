import { Schema, model } from 'mongoose'
import { Card } from '../interfaces/interfaces'

const cardSchema = new Schema<Card>({
  description: String,
  bank: String
})

const cardModel = model('card', cardSchema)

export default cardModel
