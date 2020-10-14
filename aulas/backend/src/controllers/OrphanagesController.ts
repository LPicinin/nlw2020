import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Orphanage from '../models/orphanage'


export default {
    async create(request: Request, response: Response) {
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
        const requestImages = request.files as Express.Multer.File[]
        const images = requestImages.map(image=> {
            return {path: image.filename}
        })

        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        })

        await orphanagesRepository.save(orphanage)

        return response.status(201).json(orphanage)
    },

    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage)

        const orphanages = await orphanagesRepository.find()
        return response.json(orphanages)
    },

    async show(request: Request, response: Response) {
        const { id } = request.params
        const orphanagesRepository = getRepository(Orphanage)

        const orphanage = await orphanagesRepository.findOneOrFail(id)
        return response.json(orphanage)
    }
}

/*
{
	"name": "Lar das meninas",
	"latitude": -27.2104339,
	"longitude": -49.629111,
	"about": "Sobre o orfanato",
	"instructions": "Venha visitar",
	"opening_hours": "Das 8h até 18h",
	"open_on_weekends": true
}
*/