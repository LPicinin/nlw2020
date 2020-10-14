import express from 'express'
import { getRepository } from 'typeorm'
import Orphanage from './models/orphanage'

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

app.post('/orphanages', async (request, response) => {

    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = request.body

    const orphanagesRepository = getRepository(Orphanage)

    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    })

    await orphanagesRepository.save(orphanage)

    return response.status(201).json(orphanage)
})

app.listen(3333);


//58:52
//https://nextlevelweek.com/episodios/omnistack/2/edicao/3?utm_source=convertkit&utm_medium=email&utm_campaign=NLW3+Workshops&utm_term=Leads+OmniStack&utm_content=Workshop+2