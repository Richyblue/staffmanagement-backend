const SuspendedDetails=require("../models/Suspended");

exports.createSuspended=async(req, res)=>{
    try {
        const {on_suspended, reason, duration}=req.body;
        const {staffId}=req.params;

        const createSuspended=await SuspendedDetails.create({
            on_suspended,
            reason,
            duration,
            staffId: staffId
        });

        res.status(200).json({
            message: "Suspended Details created successfully", createSuspended
        })
    } catch (error) {
        res.status(500).json({
            message: "Faild to create Suspended detals"
        })
    }
};

exports.getSuspended=async(req,res)=>{
    try {
        const getallSuspended=await SuspendedDetails.findAll({});

        res.status(200).json(getallSuspended);
    } catch (error) {
        res.status(500).json({
            message: "Faild to get Suspended details", error: error.message
        })
    }
}


exports.getSuspendedStaffId=async(req,res)=>{
    try {
        const {staffId}=req.params;
        const getallSuspendedbyid=await SuspendedDetails.findOne({staffId});

        res.status(200).json(getallSuspendedbyid);
    } catch (error) {
        res.status(500).json({
            message: "Faild to get Suspended details", error: error.message
        })
    }
}

exports.updateSuspended=async(req, res)=>{
    try {
        const {on_suspended, reason, duration}=req.body;
        const {id}=req.params;
        const createSuspended=await SuspendedDetails.findByPk({where:{id}});
        if(!createSuspended){
            return res.status(404).json({
                success: false,
                message: "Suspended details for staff not found"
            })
        }
        await createSuspended.update({
            on_suspended: on_suspended || createSuspended.on_suspended,
            reason: reason || createSuspended.reason,
            duration: duration || createSuspended.duration
        });

        res.status(200).json({
            message: "Suspended Details updated successfully", createSuspended
        })
    } catch (error) {
        res.status(500).json({
            message: "Faild to update Suspended detals"
        })
    }
};

exports.deleteSuspended=async(req,res)=>{
    try {
        const {id}=req.params;

        const deleteNow=await SuspendedDetails.destroy({where: {id}});

        if(deleteNow){
            return res.json(200).json({
                message: "Suspended Details deleted successfully"
            })
        }else{
            res.status(404).json({
                message: "Suspended details not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            message:"Faild to delete Suspended details", error: error.message
        })
    }
}
