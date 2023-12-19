import { Schema, Types, model } from "mongoose"
import { Card, Spend } from "../interfaces/interfaces"

const spendingSchema = new Schema<Spend>({
  description: String,
  userId: Types.ObjectId,
  card: {} as Card,
  amount: Number,
  date: Date
})

const MongooseSpending = model('spending', spendingSchema)

class SpendingModel {
  static async getAll(userId: string) {
    return MongooseSpending.find({ userId })
  }

  static async createSpending(userId: string, spending: Spend) {
    const mongooseSpending = new MongooseSpending({...spending, userId})
    return mongooseSpending.save()
  }
}

export default SpendingModel