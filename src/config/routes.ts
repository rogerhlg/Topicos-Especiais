import { Router } from "express";
import { ContaController } from "../controllers/contaController";

const router = Router();

const contaController = new ContaController();

router.get("/conta/listar/", contaController.listar); 
router.get("/conta/listar/:param1/:param2", contaController.buscarPorId);
router.post("/conta/cadastrar", contaController.cadastrar);
router.get("/conta/saque/:cpf/:valor", contaController.saque);

export { router };
