import { Request, Response } from "express";
import ContaSchema from "../models/ContaSchema";

class ContaController{
    listar(request: Request, response: Response) {
        const objeto = {
            atribTexto : "Uma string qualquer",
            atribNumero : 123.54,
            atribLogico : false,
            atribObjeto : {
                atribVetor : ["Opção1", "Opção2"],
                atributo: {
                    atribVetor : ["Opção1", "Opção2"],
                    atributo: "123123",
                },
            },
        };
         response.json(objeto);
    }

    buscarPorId(request: Request, response: Response) {
        const { param1, param2 } = request.params;
        const objeto = {
            param1,
            param2,
            atribTexto : "Uma string qualquer",
            atribNumero : 123.54,
            atribLogico : false,
            atribObjeto : {
                atribVetor : ["Opção1", "Opção2"]
            }
        };
        response.json(objeto);
    }

    cadastrar(request: Request, response: Response) {
        const objeto = request.body; 
        ContaSchema.create(objeto);
        console.log(objeto);
        response.json(objeto);
    }

    async saque(request: Request, response: Response){
        //**AINDA NÃO TESTEI**
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

//import * as mongoose from "mongoose";


//const Conta: any = mongoose.model("Conta", ContaSchema);

// export class ContaController {
//      addNewConta(req: Request, res: Response): void {
//         let newConta: any = new Conta(req.body);
//         });
//     }

//      getConta(request: Request, response: Response): void {
//         Conta.find({}, (, ) => {
//         });
//     }

//      getContaPorID (request: Request, response: Response): void {
//         Conta.findById(request.params.fileId, () => {
//         });
//     }

//      updateConta (req: Request, res: Response): void {
//         Conta.findOneAndUpdate({ _id: req.params. }, req.body, { new: true }, () => {
//         });
//     }

//      deleteConta (request: Request, response: Response): void {
//         Conta.remove({ _id: request.params.contatId }, () => {
            
//         });
//     }
