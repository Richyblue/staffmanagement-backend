const LeaveDetails=require("../models/Leave");

exports.createLeave=async(req, res)=>{
    try {
        const {on_leave, leave_reason, leave_duration, staff_name}=req.body;
        

        const createLeave=await LeaveDetails.create({
            on_leave,
            leave_reason,
            leave_duration,
            staff_name
        });

        res.status(200).json({
            message: "Leave Details created successfully", createLeave
        })
    } catch (error) {
        res.status(500).json({
            message: "Faild to create Leave detals"
        })
    }
};

exports.getLeave=async(req,res)=>{
    try {
        const getallLeave=await LeaveDetails.findAll({});

        res.status(200).json(getallLeave);
    } catch (error) {
        res.status(500).json({
            message: "Faild to get Leave details", error: error.message
        })
    }
}

exports.getLeavecount = async (req, res) => {
    try {
        const leaveCount = await LeaveDetails.count({
            where: { on_leave: 1 } // or 1 depending on your logic
        });

        res.status(200).json({ total: leaveCount });
    } catch (error) {
        res.status(500).json({ 
            message: "Failed to get Leave count", 
            error: error.message 
        });
    }
};


exports.getLeaveStaffId=async(req,res)=>{
    try {
        const {staffId}=req.params;
        const getallLeavebyid=await LeaveDetails.findOne({staffId});

        res.status(200).json(getallLeavebyid);
    } catch (error) {
        res.status(500).json({
            message: "Faild to get Leave details", error: error.message
        })
    }
}

exports.updateLeave=async(req, res)=>{
    try {
        const {on_leave, leave_reason, leave_duration, staff_name}=req.body;
        const {id}=req.params;
        const createLeave=await LeaveDetails.findByPk({where:{id}});
        if(!createLeave){
            return res.status(404).json({
                success: false,
                message: "Leave details for staff not found"
            })
        }
        await createLeave.update({
            on_leave: on_leave || createLeave.on_leave,
            leave_reason: leave_reason || createLeave.leave_reason,
            leave_duration: leave_duration || createLeave.leave_duration,
            staff_name: staff_name || createLeave.staff_name
        });

        res.status(200).json({
            message: "Leave Details updated successfully", createLeave
        })
    } catch (error) {
        res.status(500).json({
            message: "Faild to update Leave detals"
        })
    }
};


exports.deleteLeave=async(req,res)=>{
    try {
        const {id}=req.params;
        const deleteIn=await LeaveDetails.destroy({where:{id}});
        res.status(200).json({message: "invetory deleted successfully", deleteIn});
    } catch (error) {
        res.status(500).json({message: "Faild to delete Inventory", error: error.message});
    }
}
