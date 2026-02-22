import express from "express";
import {
  getAllPictures,
  getPicture
} from "../controllers/pictureController.js";

const router = express.Router();

router.get("/", getAllPictures);
router.get("/:id", getPicture);

export default router;
