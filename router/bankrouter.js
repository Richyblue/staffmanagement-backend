const express=require("express");
const router=express.Router();
const StaffBank=require("../controller/BankController");
const authMiddleware=require("../middleware/authMiddleware");

router.post('/bank/:staffId',authMiddleware, StaffBank.createBank);
router.put('/bank/:id', authMiddleware, StaffBank.updateBank);
router.get('/bank/:staffId', authMiddleware, StaffBank.getBankStaffId);
router.get('/bank', authMiddleware, StaffBank.getBank);
router.delete('/bank/:id', authMiddleware, StaffBank.deleteBank);

module.exports=router;
