import { Schema, model } from 'mongoose'
import { User, Account, Card } from '../interfaces/interfaces'

const userSchema = new Schema<User>({
  email: String,
  password: String,
  name: String,
  surname: String,
  workIncome: String,
  otherIncome: Schema.Types.Mixed,
  cards: Array<Card>,
  accounts: Array<Account>
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
    return MongooseUser.findByIdAndUpdate(userId, { $push: {cards: card} }, { new: true })
  }

}

export default UserModel
