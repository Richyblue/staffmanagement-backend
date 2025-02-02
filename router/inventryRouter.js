const express=require("express");
const router=express.Router();
const Inventory=require("../controller/InvetoryController");
const authMiddleware=require("../middleware/authMiddleware");

router.post('/inventory', authMiddleware, Inventory.createInvenory);
router.get('/inventory', authMiddleware, Inventory.getallIn);
router.put('/inventory/:id', authMiddleware, Inventory.createInvenoryUpdate);
router.delete('/inventory/:id', authMiddleware, Inventory.DeleteIn);



module.exports=router;