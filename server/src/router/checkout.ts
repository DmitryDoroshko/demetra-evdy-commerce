import { Router } from "express";
import { createOrder, getOrderById } from "../controllers/checkoutController";

const router = Router();

router.post("/", createOrder);
router.get("/order/:orderId", getOrderById);

export default router;