import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import catsRouter from './routers/cats/catsRouter.js'
import userRouter from './routers/user/userRouter.js'

const app=express()
const formatsLogger=app.get('env')==='development'?'dev':'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/users',userRouter)
app.use('/cats',catsRouter)

app.use((req, res) => {
    res.status(404).json({ status: 'error', code: 404, message: 'Not found' })
  })
  // uncontrol error
  app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({
      status: status === 500 ? 'fail' : 'error',
      code: status,
      message: err.message,
    })
  })

  export default app