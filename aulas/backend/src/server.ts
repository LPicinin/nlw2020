import express from 'express'

import './database/connection'

const app = express()
app.use(express.json())

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

app.get('/users', (request, response)=>{
    return response.json({message: 'Hello World'})
})

app.listen(3333);


//35:16