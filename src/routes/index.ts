import { Router } from "express";
import { battlePost } from "../controllers/battleController";
import { schemasValidator } from "../middlewares/schemasValidator";
import battleSchema from "../schemas/battleSchemas";

const router = Router();

router.post("/battle", schemasValidator(battleSchema), battlePost);
router.get("/ranking");

export default router;