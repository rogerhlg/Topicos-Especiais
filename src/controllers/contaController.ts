import * as mongoose from "mongoose";
import { ContaSchema } from "../models/contaModel";
import { Request, Response } from "express";

const Conta: any = mongoose.model("Conta", ContaSchema);

export class ContaController {
     addNewConta(req: Request, res: Response): void {
        let newConta: any = new Conta(req.body);
        });
    }

     getConta(request: Request, response: Response): void {
        Conta.find({}, (, ) => {
        });
    }

     getContaPorID (request: Request, response: Response): void {
        Conta.findById(request.params.fileId, () => {
        });
    }

     updateConta (req: Request, res: Response): void {
        Conta.findOneAndUpdate({ _id: req.params. }, req.body, { new: true }, () => {
        });
    }

     deleteConta (request: Request, response: Response): void {
        Conta.remove({ _id: request.params.contatId }, () => {
            
        });
    }
