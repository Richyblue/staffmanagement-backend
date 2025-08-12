const express=require("express");
const router=express.Router();
const StaffLeave=require("../controller/LeaveController");
const authMiddleware=require("../middleware/authMiddleware");

router.post('/Leave',authMiddleware, StaffLeave.createLeave);
router.put('/Leave/:id', authMiddleware, StaffLeave.updateLeave);
router.get('/Leave/:staffId', authMiddleware, StaffLeave.getLeaveStaffId);
router.get('/Leave', authMiddleware, StaffLeave.getLeave);
router.delete('/Leave/:id', authMiddleware, StaffLeave.deleteLeave);
router.get('/Leavecount', authMiddleware, StaffLeave.getLeavecount);

module.exports=router;
