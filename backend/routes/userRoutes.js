import express from "express";
import { getMe } from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected Route
router.get("/me", protect, getMe);

export default router;