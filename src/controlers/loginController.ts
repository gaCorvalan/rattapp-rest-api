import { Request, Response } from "express"
import UserModel from "../models/userModel"
import bcrypt from 'bcrypt'


class LoginController {
  static async login (req: Request, res: Response) {
    const { email, password } = req.body
    
    const user = await UserModel.getByParam({email})
  
    const correctPassword = !user ?
      false :
      await bcrypt.compare(password, user.password) &&
        user?.email === email
  
    if (!correctPassword) {
      res.status(401).json({ message: 'Incorrect email or password' })
    }
  
    res.send(user)
  }
}

export default LoginController