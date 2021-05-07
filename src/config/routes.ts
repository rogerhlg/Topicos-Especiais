import { Router } from "express";
import { ContaController } from "../controllers/contaController";

const router = Router();

const contaController = new ContaController();

router.get("/conta/listar/", contaController.listar); 
router.get("/conta/buscar/:cpf", contaController.buscarPorCpf);
router.post("/conta/cadastrar", contaController.cadastrar);
router.delete("/conta/deletar/:CPF", contaController.remover);
router.post("/conta/saque/:PIX", contaController.saque);
router.post("/conta/deposito/:PIX", contaController.deposito);
router.put("/conta/atualizar/:cpf", contaController.atualizar);

export { router };
