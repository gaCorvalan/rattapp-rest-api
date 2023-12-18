import { Card, User } from "../interfaces/interfaces"
import { UserModel } from "../models/userModel"
import { Request, Response } from "express"
import bcrypt from 'bcrypt'

class UserController {
  static async getAll (_req: Request, res: Response) {
    const allUsers = await UserModel.getAll()
    res.send(allUsers)
  }

  static async createUser (_req: Request, res: Response) {
    const saltRounds = 10
    const { body: bodyRequest } = res.req
    const userBody = {
      ...bodyRequest,
      password: await bcrypt.hash(bodyRequest.password,  saltRounds)
    } as User
  
    const createdUser = await UserModel.createUser(userBody)
    res.send(createdUser)
  }

  static async getCards (req: Request, res: Response) {
    const user = await UserModel.getCards(req.params.id)
    if (!user) {
      res.status(500).send('user doesnt exist')
      return
    }
    const { cards } = user
    res.send(cards)
  }

  static async addCard(req: Request, res: Response) {
    const card = req.body as Card
    const updatedUser = await UserModel.addCard(req.params.id, card)
  
    if (!updatedUser) {
      res.status(404).send({ error: 'Usuario no encontrado' });
    }
  
    res.send(updatedUser)
  }

}

export default UserController