import express from "express";
import {verifyToken} from "../middleware/verifyToken.js";
import {  getGuides , getGuide } from "../controllers/guide.controller.js";

const router = express.Router();

router.get("/", getGuides);
router.get("/:id", getGuide);



export default router;