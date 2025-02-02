const TerminationDetails=require("../models/Termination");

exports.createTermination=async(req, res)=>{
    try {
        const {on_termination, reason, duration}=req.body;
        const {staffId}=req.params;

        const createTermination=await TerminationDetails.create({
            on_termination,
            reason,
            duration,
            staffId: staffId
        });

        res.status(200).json({
            message: "Termination Details created successfully", createTermination
        })
    } catch (error) {
        res.status(500).json({
            message: "Faild to create Termination detals"
        })
    }
};

exports.getTermination=async(req,res)=>{
    try {
        const getallTermination=await TerminationDetails.findAll({});

        res.status(200).json(getallTermination);
    } catch (error) {
        res.status(500).json({
            message: "Faild to get Termination details", error: error.message
        })
    }
}


exports.getTerminationStaffId=async(req,res)=>{
    try {
        const {staffId}=req.params;
        const getallTerminationbyid=await TerminationDetails.findOne({staffId});

        res.status(200).json(getallTerminationbyid);
    } catch (error) {
        res.status(500).json({
            message: "Faild to get Termination details", error: error.message
        })
    }
}

exports.updateTermination=async(req, res)=>{
    try {
        const {on_termination, reason, duration}=req.body;
        const {id}=req.params;
        const createTermination=await TerminationDetails.findByPk({where:{id}});
        if(!createTermination){
            return res.status(404).json({
                success: false,
                message: "Termination details for staff not found"
            })
        }
        await createTermination.update({
            on_termination: on_termination || createTermination.on_termination,
            reason: reason || createTermination.reason,
            duration: duration || createTermination.duration
        });

        res.status(200).json({
            message: "Termination Details updated successfully", createTermination
        })
    } catch (error) {
        res.status(500).json({
            message: "Faild to update Termination detals"
        })
    }
};

exports.deleteTermination=async(req,res)=>{
    try {
        const {id}=req.params;

        const deleteNow=await TerminationDetails.destroy({where: {id}});

        if(deleteNow){
            return res.json(200).json({
                message: "Termination Details deleted successfully"
            })
        }else{
            res.status(404).json({
                message: "Termination details not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            message:"Faild to delete Termination details", error: error.message
        })
    }
}
