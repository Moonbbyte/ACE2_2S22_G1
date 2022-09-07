import {request, Router} from "express";
import { methods as proyecto1Controller } from "../controllers/proyecto1.controller";

const router = Router();


router.get("/Usuario", proyecto1Controller.getUsuario);
router.get("/DataUsu", proyecto1Controller.getDataUsu);
router.get("/Fuerza", proyecto1Controller.getFuerza);
router.get("/Velocidad", proyecto1Controller.getVelocidad);
router.get("/Ritmo", proyecto1Controller.getRitmo);

router.post("/Usuario", proyecto1Controller.addUsuario);
router.post("/DataUsu", proyecto1Controller.addDataUsu);
router.post("/Fuerza", proyecto1Controller.addFuerza);
router.post("/Velocidad", proyecto1Controller.addVelocidad);
router.post("/Ritmo", proyecto1Controller.addRitmo);

export default router;
