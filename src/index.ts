import express from  'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Request,Response } from 'express'

dotenv.config()
const Api=express()
Api.use(cors({origin:'*'}))
Api.get('/',(req:Request,res:Response)=>{
    res.send('pong')
})
Api.use((req:Request,res:Response)=>{
    res.status(404).json({error:'rota não encontrada'})
})
Api.listen(process.env.PORT as string)