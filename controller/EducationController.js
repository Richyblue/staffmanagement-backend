const EducationDetails=require("../models/education");

exports.createEducation=async(req, res)=>{
    try {
        const {name, year_start, year_end, title}=req.body;
        const {staffId}=req.params;

        const createEducation=await EducationDetails.create({
            name,
            year_start,
            year_end,
            title,
            staffId: staffId
        });

        res.status(200).json({
            message: "Education Details created successfully", createEducation
        })
    } catch (error) {
        res.status(500).json({
            message: "Faild to create Education detals"
        })
    }
};

exports.getEducation=async(req,res)=>{
    try {
        const getallEducation=await EducationDetails.findAll({});

        res.status(200).json(getallEducation);
    } catch (error) {
        res.status(500).json({
            message: "Faild to get Education details", error: error.message
        })
    }
}


exports.getEducationStaffId=async(req,res)=>{
    try {
        const {staffId}=req.params;
        const getallEducationbyid=await EducationDetails.findOne({staffId});

        res.status(200).json(getallEducationbyid);
    } catch (error) {
        res.status(500).json({
            message: "Faild to get Education details", error: error.message
        })
    }
}

exports.updateEducation=async(req, res)=>{
    try {
        const {name, year_start, year_end, title}=req.body;
        const {id}=req.params;
        const createEducation=await EducationDetails.findByPk({where:{id}});
        if(!createEducation){
            return res.status(404).json({
                success: false,
                message: "Education details for staff not found"
            })
        }
        await createEducation.update({
            name: name || createEducation.name,
            year_start: year_start || createEducation.year_start,
            year_end: year_end || createEducation.year_end,
            title:title || createEducation.title
        });

        res.status(200).json({
            message: "Education Details updated successfully", createEducation
        })
    } catch (error) {
        res.status(500).json({
            message: "Faild to update Education detals"
        })
    }
};

exports.deleteEducation=async(req,res)=>{
    try {
        const {id}=req.params;

        const deleteNow=await EducationDetails.destroy({where: {id}});

        if(deleteNow){
            return res.json(200).json({
                message: "Education Details deleted successfully"
            })
        }else{
            res.status(404).json({
                message: "Education details not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            message:"Faild to delete Education details", error: error.message
        })
    }
}
