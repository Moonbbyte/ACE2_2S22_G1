import {request, Router} from "express";
import { methods as proyecto1Controller } from "../controllers/practica2.controller";

const router = Router();


router.get("/Usuario", proyecto1Controller.getUsuario);
router.get("/DataUsu", proyecto1Controller.getDataUsu);
router.get("/Frecuencia", proyecto1Controller.getFrecuenica);
router.get("/Rango", proyecto1Controller.getRango);
router.get("/FrecuenciaRep", proyecto1Controller.getFrecRep);
router.get("/Calorias", proyecto1Controller.getCalorias);

router.post("/Usuario", proyecto1Controller.addUsuario);
router.post("/DataUsu", proyecto1Controller.addDataUsu);
router.post("/Frecuencia", proyecto1Controller.addFrecuencia);
router.post("/Rango", proyecto1Controller.addRango);
router.post("/FrecuenciaRep", proyecto1Controller.addFrecRep);
router.post("/Calorias", proyecto1Controller.addCalorias);

export default router;
