import { Router } from 'express'
import type { Card } from '../interfaces/interfaces'
import CardModel from '../models/cardModel'
const router = Router()

router.get('/', (_req, res) => {
  CardModel.find({})
    .then((response) => res.send(response))
    .catch((error) => console.error(error))
})

router.post('/', (_req, res) => {
  const body = res.req.body as Card
  const card = new CardModel(body)
  card.save()
    .then((savedCard: Card) => console.log('Usuario Guardado Correctamente', savedCard.description))
    .catch((error) => console.log(error, 'No se guardo correctamente'))
  res.send(body)
})

export default router
