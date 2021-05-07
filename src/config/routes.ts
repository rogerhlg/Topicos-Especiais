import { Router } from "express";
import { ContaController } from "../controllers/ContaController";

const router = Router();

const contaController = new ContaController();

router.get("/conta/listar/", contaController.listar); 
router.get("/conta/listar/:id", contaController.buscarPorId);
router.post("/conta/cadastrar", contaController.cadastrar);
router.get("/conta/saque/:cpf/:valor", contaController.saque);

export { router };
