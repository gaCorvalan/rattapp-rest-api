import { Router } from 'express'
import LoginController from '../controlers/loginController'
const loginRouter = Router()

loginRouter.post('/', LoginController.login)

export default loginRouter
