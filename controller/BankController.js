const BankDetails=require("../models/BankDetails");

exports.createBank=async(req, res)=>{
    try {
        const {bank_name, beneficiary, acc_number}=req.body;
        const {staffId}=req.params;

        const createbank=await BankDetails.create({
            bank_name,
            beneficiary,
            acc_number,
            staffId: staffId
        });

        res.status(200).json({
            message: "Bank Details created successfully", createbank
        })
    } catch (error) {
        res.status(500).json({
            message: "Faild to create bank detals"
        })
    }
};

exports.getBank=async(req,res)=>{
    try {
        const getallbank=await BankDetails.findAll({});

        res.status(200).json(getallbank);
    } catch (error) {
        res.status(500).json({
            message: "Faild to get bank details", error: error.message
        })
    }
}


exports.getBankStaffId=async(req,res)=>{
    try {
        const {staffId}=req.params;
        const getallbankbyid=await BankDetails.findOne({staffId});

        res.status(200).json(getallbankbyid);
    } catch (error) {
        res.status(500).json({
            message: "Faild to get bank details", error: error.message
        })
    }
}

exports.updateBank=async(req, res)=>{
    try {
        const {bank_name, beneficiary, acc_number}=req.body;
        const {id}=req.params;
        const createbank=await BankDetails.findByPk({where:{id}});
        if(!createbank){
            return res.status(404).json({
                success: false,
                message: "Bank details for staff not found"
            })
        }
        await createbank.update({
            bank_name: bank_name || createbank.bank_name,
            beneficiary: beneficiary || createbank.beneficiary,
            acc_number: acc_number || createbank.acc_number
        });

        res.status(200).json({
            message: "Bank Details updated successfully", createbank
        })
    } catch (error) {
        res.status(500).json({
            message: "Faild to update bank detals"
        })
    }
};

exports.deleteBank=async(req,res)=>{
    try {
        const {id}=req.params;

        const deleteNow=await BankDetails.destroy({where: {id}});

        if(deleteNow){
            return res.json(200).json({
                message: "Bank Details deleted successfully"
            })
        }else{
            res.status(404).json({
                message: "Bank details not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            message:"Faild to delete bank details", error: error.message
        })
    }
}
