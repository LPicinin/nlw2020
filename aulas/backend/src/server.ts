import express from 'express'

import './database/connection'
import routes from './routes'


const app = express()
app.use(express.json())
app.use(routes)

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