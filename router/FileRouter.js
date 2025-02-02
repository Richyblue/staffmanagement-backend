const express=require("express");
const router=express.Router();
const upload=require("../utls/multer");
const Files=require("../controller/FilesController");
const authMiddleware=require("../middleware/authMiddleware");

router.post('/files', authMiddleware, upload.single("files"), Files.createFIles);
router.get("/files", authMiddleware, Files.getFIles);

module.exports=router;