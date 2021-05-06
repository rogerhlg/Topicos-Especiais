import { Request, Response } from "express";
import { ContaController } from "../controllers/contaController";

export class Routes {
    public contaController: ContaController = new ContaController();

    public routes(app: any): void {
        app.route("/")
        .get((request: Request, response: Response) => {
            response.status(200).send({
                message: "sucesso!!!!"
            });
        });

      
        app.route("/clientes")
            .get(this.contaController.getConta)
            .post(this.contaController.addNewConta);

     
        app.route("/Conta/:contaId")
            .get(this.contaController.getContaPorID)
            .put(this.contaController.updateConta)
            .delete(this.contaController.deleteConta);
    }
}
