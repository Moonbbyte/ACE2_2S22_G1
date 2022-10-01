import {request, Router} from "express";
import { methods as practica2Controller } from "../controllers/practica2.controller";

const router = Router();


router.get("/Usuario", practica2Controller.getUsuario);
router.get("/DataUsu", practica2Controller.getDataUsu);
router.get("/Frecuencia", practica2Controller.getFrecuenica);
router.get("/Rango", practica2Controller.getRango);
router.get("/FrecuenciaRep", practica2Controller.getFrecRep);
router.get("/Calorias", practica2Controller.getCalorias);

router.post("/Usuario", practica2Controller.addUsuario);
router.post("/DataUsu", practica2Controller.addDataUsu);
router.post("/Frecuencia", practica2Controller.addFrecuencia);
router.post("/Rango", practica2Controller.addRango);
router.post("/FrecuenciaRep", practica2Controller.addFrecRep);
router.post("/Calorias", practica2Controller.addCalorias);

export default router;
