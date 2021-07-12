import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.router.js'
import boardRouter from './routes/board.router.js'
import errorMiddleware from './middlewares/error.middleware.js'


const app = express()
dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL,
}
))
app.use('/api/user', userRouter)
app.use('/api/board', boardRouter)


app.use(errorMiddleware)


const start = async () => {
  try {
    app.listen(process.env.PORT || 5000, () => console.log('Server started on port ', process.env.PORT))
    
  } catch (e) {
    console.log(e);
    throw e

  }
}
 
start()