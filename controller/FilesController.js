const FIle=require("../models/files");

exports.createFIles=async(req,res)=>{
    try {
        const {staff_name, file_name}=req.body;
        const files = req.file ? req.file.path : null;

        const createfile=await FIle.create({staff_name, files, file_name});
        res.status(200).json({
            message:"File created successfully", createfile
        });
    } catch (error) {
        res.status(500).json({
            message: "Faild to create file", error: error.message
        });
    }
}


exports.getFIles=async(req,res)=>{
    try {

        const getFiless=await FIle.findAll({});
        res.status(200).json(getFiless);
    } catch (error) {
        res.status(500).json({
            message: "Faild to create file", error: error.message
        });
    }
}