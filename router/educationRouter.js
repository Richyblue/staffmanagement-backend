const express=require("express");
const router=express.Router();
const StaffEducation=require("../controller/EducationController");
const authMiddleware=require("../middleware/authMiddleware");

router.post('/Education/:staffId',authMiddleware, StaffEducation.createEducation);
router.put('/Education/:id', authMiddleware, StaffEducation.updateEducation);
router.get('/Education/:staffId', authMiddleware, StaffEducation.getEducationStaffId);
router.get('/Education', authMiddleware, StaffEducation.getEducation);
router.delete('/Education/:id', authMiddleware, StaffEducation.deleteEducation);

module.exports=router;
