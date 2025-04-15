import { Router } from "express";
import { authorize } from "../middleware/auth";
import { getUser, signIn, signOut, signUp } from "../controllers/usersController";

const router = Router();

router.get("/user", authorize, getUser);
router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.post("/sign-out", authorize, signOut);

export default router;