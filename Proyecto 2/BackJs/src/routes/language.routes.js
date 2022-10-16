import {request, Router} from "express";
import { methods as practica2Controller } from "../controllers/proyecto2.controller";

const router = Router();


router.get("/Usuario", practica2Controller.getUsuario);
router.get("/DataUsu", practica2Controller.getDataUsu);
router.get("/FuerzaImp", practica2Controller.getFuerzaImp);
router.get("/VelocidadImp", practica2Controller.getVelImp);
router.get("/FuerzaLlegada", practica2Controller.getFuerzaLleg);
router.get("/Peso", practica2Controller.getPeso);
router.get("/Ritmo", practica2Controller.getRitmo);
router.get("/Calorias", practica2Controller.getCalorias);

router.post("/Usuario", practica2Controller.addUsuario);
router.post("/DataUsu", practica2Controller.addDataUsu);
router.post("/FuerzaImp", practica2Controller.addFuerzaImp);
router.post("/VelocidadImp", practica2Controller.addVelImp);
router.post("/FuerzaLlegada", practica2Controller.addFuerzaLleg);
router.post("/Peso", practica2Controller.addPeso);
router.post("/Ritmo", practica2Controller.addRitmo);
router.post("/Calorias", practica2Controller.addCalorias);

export default router;
