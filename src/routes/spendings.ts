import { Router } from 'express'
import SpendingController from '../controlers/spendingController'

const spendingsRouter = Router()

spendingsRouter.get('/:userId', SpendingController.getAll)

spendingsRouter.post('/:userId', SpendingController.createSpending)
export default spendingsRouter