import express from "express";
import { register, login, logout } from "../controllers/user.js";
const router = express.Router();

router.post("/signup", register);
router.post("/signin", login);
router.get("/signout", logout);

export default router;
