import express from "express";
import {verifyToken} from "../middleware/verifyToken.js";
import {  getGuides } from "../controllers/guide.controller.js";

const router = express.Router();

router.get("/", getGuides);


export default router;