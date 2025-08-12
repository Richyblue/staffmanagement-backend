const express=require("express");
const router=express.Router();
const Staff=require("../controller/StaffController");
const authMiddleware=require("../middleware/authMiddleware");

router.post('/staffqr',Staff.createStaffQr);
router.put('/staff/othersqr/:id',Staff.updateStaffOthersqr);
router.post('/staff',authMiddleware, Staff.createStaff);
router.get('/staff',authMiddleware, Staff.getStaff);
router.put('/staff/:id',authMiddleware, Staff.updateStaff);
router.delete('/staff/:id',authMiddleware, Staff.deleteStaff);
router.get('/staff/:id',authMiddleware, Staff.getStaffById);
router.get('/staff/st',authMiddleware, Staff.getStaffSuspended);
router.get('/staff/get/:staffId', authMiddleware, Staff.getStaffDetails);
router.put('/staff/others/:id', Staff.updateStaffOthers);
router.put('/staff/medical/:id',authMiddleware, Staff.updateStaffMedical);
router.put('/staff/friend/:id',authMiddleware, Staff.updateStaffFriends);
router.put('/staff/parent/:id',authMiddleware, Staff.updateStaffParent);
router.put('/staff/medical/:id',authMiddleware, Staff.updateStaffExtended);
router.put('/staff/terminate/:id',authMiddleware, Staff.updateStaffStatus);
router.put('/staff/status/:id',authMiddleware, Staff.updateStaffStatusTwo);
router.post('/checkMail' , Staff.checkEmail);
router.post('/staff/gurantor/:staffId',authMiddleware, Staff.createGurantors);
router.get("/staff/:staffId", authMiddleware, Staff.getGuarantorsByStaffId);
router.get("/staffcount", authMiddleware, Staff.getStaffcount);
router.get("/staffsuspendedcount", authMiddleware, Staff.getStaffSuspendedcount);



module.exports=router;
