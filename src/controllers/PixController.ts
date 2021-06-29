import { Request, Response } from "express";
import pixSchema from "../models/PixSchema";

class PixController{
    

    async listar(request: Request, response: Response) {
        const pixes = await pixSchema.find();
         response.status(200).json(pixes);
    }

    async buscarPorId(request: Request, response: Response) {
        const { id } = request.params;
        // const ciclo = await CicloSchema.findById(id);
        // const ciclo = await CicloSchema.find({ _id : id});
        try {
            const pix = await pixSchema.findOne({ _id : id});
            if(pix === null) {
                response.status(404).json({ msg: "Esse pix não existe!"});
            }
            response.status(200).json(pix);
        } catch (error) {
            response.status(400).json(error);
        }
        
    }

    async cadastrar(request: Request, response: Response) {
        try {
            const novaPix = await pixSchema.create(request.body);
            response.status(201).json(novaPix);
        }catch (error) {
            response.status(400).json(error);
        }
    }
}

export { PixController }
