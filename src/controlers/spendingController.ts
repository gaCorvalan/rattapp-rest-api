import { Request, Response } from 'express'
import SpendingModel from '../models/spendingModel'
import { Spend, User } from '../interfaces/interfaces'
import UserModel from '../models/userModel'

class SpendingController {
  static async getAll(req: Request, res: Response) {
    const userId = req.params.userId
    const spendings = await SpendingModel.getAll(userId)
    res.send(spendings)
  }

  static async createSpending(req: Request, res: Response) {
    console.log("entro: ", '\n')
    const { userId } = req.params
    const user = await UserModel.getSpendings(userId)

    console.log("USUARIO BY PARAM: ", user, '\n')
    
    if (!user) {
      res.status(500).send('El usuario no existe')
      return
    }

    const spending = res.req.body as Spend

    console.log("SPENDING: ", spending, '\n')
    const savedSpending = await SpendingModel.createSpending(userId, spending)

    console.log("SAVED SPENDING: ", '\n')

    if (!savedSpending) {
      res.status(500).send('No se pudo crear spending')
      return
    }

    const { lastSpendings } = user
    let savedUser: User | null

    if (lastSpendings.length >= 10) {
      lastSpendings.shift()
      lastSpendings.push(savedSpending)
      savedUser = await UserModel.updateSpendings(userId, lastSpendings)
    } else {
      savedUser = await UserModel.addSpending(userId, savedSpending)
    }

    console.log("lastSpendings: ", lastSpendings, '\n')

    if (!savedUser) {
      res.status(500).send('No se pudo agregar spending al usuario')
      return
    }

    console.log("savedUser: ", savedUser, '\n')

    res.send(savedUser)
  }
}

export default SpendingController