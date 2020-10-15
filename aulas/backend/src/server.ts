import express from 'express'
import 'express-async-errors'
import path from 'path'
import cors from 'cors'

import './database/connection'
import routes from './routes'
import ErrorHandler from './errors/handler'


const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(ErrorHandler)

//Rota = conjunto
//Recurso = usuário

//Método HTTP = GET, POST, PUT, DELETE
//Parâmetros

//GET = Buscar informação
//POST = Criar uma informação
//PUT = Editando uma informação
//DELETE = Deleta uma informação

//--parametros
//Query Parms: http://localhost:3333/users?search=diego
//Route Parms: http://localhost:3333/users/1 (Identificam um recurso)
//Body: http://localhost:3333/users/1 (Identificam um recurso)



app.listen(3333);


//1:30:00
//https://youtu.be/QArToKrgBNs?t=5439