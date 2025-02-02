const express=require("express");
const router=express.Router();
const StaffSuspended=require("../controller/SuspendedController");
const authMiddleware=require("../middleware/authMiddleware");

router.post('/Suspended/:staffId',authMiddleware, StaffSuspended.createSuspended);
router.put('/Suspended/:id', authMiddleware, StaffSuspended.updateSuspended);
router.get('/Suspended/:staffId', authMiddleware, StaffSuspended.getSuspendedStaffId);
router.get('/Suspended', authMiddleware, StaffSuspended.getSuspended);
router.delete('/Suspended/:id', authMiddleware, StaffSuspended.deleteSuspended);

module.exports=router;
