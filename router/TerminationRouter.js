const express=require("express");
const router=express.Router();
const StaffTermination=require("../controller/TerminationController");
const authMiddleware=require("../middleware/authMiddleware");

router.post('/Termination/:staffId',authMiddleware, StaffTermination.createTermination);
router.put('/Termination/:id', authMiddleware, StaffTermination.updateTermination);
router.get('/Termination/:staffId', authMiddleware, StaffTermination.getTerminationStaffId);
router.get('/Termination', authMiddleware, StaffTermination.getTermination);
router.delete('/Termination/:id', authMiddleware, StaffTermination.deleteTermination);

module.exports=router;
