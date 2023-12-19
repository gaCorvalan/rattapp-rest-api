import express from 'express'
import usersRoutes from './routes/users'
import dotenv from 'dotenv'
import { connect } from 'mongoose'
import loginRouter from './routes/login'
import spendingsRouter from './routes/spendings'
dotenv.config()

const connectionString = `mongodb+srv://gabrielcorvalandev:${process.env.MONGO ?? ''}@freeappscluster.dzmrb4l.mongodb.net/rattapp`
const app = express()

app.use(express.json())

const port = process.env.PORT ?? 3000

const connection = connect(connectionString)

connection
  .then(() => console.log('Conectado correctamente'))
  .catch((error) => console.error(error, 'Error al conectar'))

app.get('/', (_req, res) => {
  res.send('Express + TypeScript Server + jango')
})

app.get('/ping', (_req, res) => {
  res.send('<h1>Hello World<h1/>')
})

app.use('/login', loginRouter)
app.use('/users', usersRoutes)
app.use('/spendings', spendingsRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
