import { Router } from "express";
import { ContaController } from "../controllers/contaController";

const router = Router();
      
app.route("/clientes")
    .get(this.contaController.getConta)
    .post(this.contaController.addNewConta);

     
app.route("/Conta/:contaId")
    .get(this.contaController.getContaPorID)
    .put(this.contaController.updateConta)
    .delete(this.contaController.deleteConta);


export { router };
