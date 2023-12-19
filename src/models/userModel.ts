import mongoose, { Schema, model } from 'mongoose'
import { User, Account, Card, Spend } from '../interfaces/interfaces'

const userSchema = new Schema<User>({
  email: String,
  password: String,
  name: String,
  surname: String,
  workIncome: String,
  otherIncome: Schema.Types.Mixed,
  cards: Array<Card>,
  accounts: Array<Account>,
  lastSpendings: Array<Spend>
})

const MongooseUser = model('user', userSchema)

export class UserModel {
  static async getAll () {
    return MongooseUser.find({})
  }

  static async getByParam(paramsObj: any) {
    return MongooseUser.findOne(paramsObj)
  }

  static async createUser(user: User) {
    const mongooseUser = new MongooseUser(user)
    return mongooseUser.save()
  }

  static async getCards(userId: string) {
    return MongooseUser.findById(userId, { cards: 1 })
  }

  static async addCard(userId: string, card: Card) {
    return MongooseUser.findByIdAndUpdate(userId, { $push: {cards: {_id: new mongoose.Types.ObjectId(), ...card}} }, { new: true })
  }

  static async getSpendings(userId: string) {
    return MongooseUser.findById(userId, { lastSpendings: 1 })
  }

  static async addSpending(userId: string, spending: Spend) {
    return MongooseUser.findByIdAndUpdate(userId, { $push: {lastSpendings: spending} }, { new: true })
  }

  static async updateSpendings(userId: string, lastSpendings: [Spend]) {
    return MongooseUser.findByIdAndUpdate(userId, { lastSpendings }, { new: true })
  }

}

export default UserModel
