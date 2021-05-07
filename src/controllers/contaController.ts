import { Request, Response } from "express";
import ContaSchema from "../models/ContaSchema";

class ContaController{
    async listar(request: Request, response: Response) {
        const contas = await ContaSchema.find();
         response.status(200).json(contas);
    }

    async buscarPorId(request: Request, response: Response) {
        const { id } = request.params;
        // const ciclo = await CicloSchema.findById(id);
        // const ciclo = await CicloSchema.find({ _id : id});
        try {
            const conta = await ContaSchema.findOne({ _id : id});
            if(conta === null) {
                response.status(404).json({ msg: "A conta não existe!"});
            }
            response.status(200).json(conta);
        } catch (error) {
            response.status(400).json(error);
        }
        
    }

    async cadastrar(request: Request, response: Response) {
        try {
            const novaConta = await ContaSchema.create(request.body);
            response.status(201).json(novaConta);
        }catch (error) {
            response.status(400).json(error);
        }
    }

    async saque(request: Request, response: Response){
       
        try {
            const cpf = request.params.cpf;
            const valor = request.body.valor;
            
            await ContaSchema.findOneAndUpdate({cpf : cpf}, {$inc : {saldo : valor}});
            response.status(200).json("Saldo adicionado");
        } catch (error) {
            response.status(400).json(error);
        }
    }
}

export { ContaController }
