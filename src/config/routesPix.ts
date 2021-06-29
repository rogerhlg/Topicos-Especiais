import { Router } from "express";
import { PixController } from "../controllers/PixController";

const router = Router();

const pixController = new PixController();

router.get("/pix/listar/", pixController.listar); 
router.get("/pix/listar/:id", pixController.buscarPorId);
router.post("/pix/cadastrar", pixController.cadastrar);

export { router };
