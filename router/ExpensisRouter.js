const express=require("express");
const router=express.Router();
const Expensis=require("../controller/ExpensisController");
const authMiddleware=require("../middleware/authMiddleware");

router.post('/Expensis', authMiddleware, Expensis.createExpensis);
router.get('/Expensis', authMiddleware, Expensis.getallIn);
router.put('/Expensis/:id', authMiddleware, Expensis.createExpensisUpdate);
router.delete('/Expensis/:id', authMiddleware, Expensis.DeleteIn);
router.get('/Expensis/:id', authMiddleware, Expensis.getExpensisById);



module.exports=router;
