import { Router } from 'express'
import UserController from '../controlers/userController'

const router = Router()

router.get('/', UserController.getAll)

router.post('/', UserController.createUser)

router.get('/:id/cards', UserController.getCards)

router.post('/:id/cards', UserController.addCard)

export default router
