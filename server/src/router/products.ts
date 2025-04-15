import { Router } from "express";
import { getProducts, getSingleProduct } from "../controllers/productsController";

const router = Router();

router.get("/:productId", getSingleProduct);
router.get("/", getProducts);

export default router;
