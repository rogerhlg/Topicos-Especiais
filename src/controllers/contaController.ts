import { Request, Response } from "express";
import ContaSchema from "../models/ContaSchema";
import DepositoSchema from "../models/DepositoSchema";
import SaqueSchema from "../models/SaqueSchema";

class ContaController{
    async listar(request: Request, response: Response) {
        const contas = await ContaSchema.find();
         response.status(200).json(contas);
    }

    async buscarPorCpf(request: Request, response: Response) {
        const { cpf } = request.params;
        // const ciclo = await CicloSchema.findById(id);
        // const ciclo = await CicloSchema.find({ _id : id});
        try {
            const conta = await ContaSchema.findOne({ CPF : cpf});
            if(conta === null) {
                response.status(404).json({ msg: "A conta não existe!"});
            }
            response.status(200).json(conta);
        } catch (error) {
            response.status(400).json(error);
        }
        
    }

    async atualizar (request:Request, response:Response) {
        try{
          const {primeiroNome, sobrenome, CPF, telefone, chavepix} = request.body
          const { cpf } = request.params
          const conta = await ContaSchema.findOneAndUpdate({ CPF : cpf}, {
            primeiroNome, 
            sobrenome, 
            CPF, 
            telefone, 
            chavepix
          }, {new: true} )
      
          if(conta != null){
      
          response.status(200).json({
            objeto: conta,
            msg: "Conta atualizada com sucesso",
            erro: false
          })
      
          } else{
            response.status(404).json({
                objeto: conta,
                msg:"A conta procurado não existe",
                erro:true})
          }
        } catch (error) {
          response.status(400).json({
              objeto: error,
              msg: "Digite um CPF com formato válido",
              erro: true
            })
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
            const saque = request.body;
            await SaqueSchema.create(saque);
            const valor = saque.valor;
            const chave = saque.chavepix.chave; 
            await ContaSchema.findOneAndUpdate({'chavepix.chave' : chave}, {$inc : {saldo : -valor}});
            response.status(200).json("Saque efeutado!");
        } catch (error) {
            response.status(400).json(error);
        }
    }

    async deposito(request: Request, response: Response){
        //**AINDA NÃO TESTEI**
        try {
            const deposito = request.body;
            await DepositoSchema.create(request.body);
            const valor  = deposito.valor;
            const chave    = deposito.pix.chave;
            await ContaSchema.findOneAndUpdate({'chavepix.chave' : chave}, {$inc : {saldo : valor}});
            response.status(200).json("Deposito efetuado");
        } catch (error) {
            response.status(400).json(error);
        }
    }
}

export { ContaController }
