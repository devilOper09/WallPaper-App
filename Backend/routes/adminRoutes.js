import express from "express";
import {
    postAPicture,
    updatePicture,
    deletePicture
} from "../controllers/pictureController.js";
import { upload } from "../config/multer.js";


const router = express.Router();
router.post("/", upload.single("image"), postAPicture);
router.put("/:id", upload.single("image"), updatePicture);
router.delete("/:id", deletePicture);

export default router;
