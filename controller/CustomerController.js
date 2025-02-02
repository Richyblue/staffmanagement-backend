const Customer=require("../models/Customer");
const BankDetails=require("../models/BankDetails");
const Leave=require("../models/Leave");

exports.createCustomer=async(req,res)=>{
    try {
        const {
            first_name,
            last_name,
            email,
            phone,
            country,
            state,
            city,
            address,
            gender,
            marital_status,
            office,
            language,
            
        }=req.body;

        const allCustomer=await Customer.create({
            first_name,
            last_name,
            email,
            phone,
            country,
            state,
            city,
            address,
            gender,
            marital_status,
            office,
            language,
            
        });
        res.status(200).json({message: "Customer created successfully", allCustomer});
    } catch (error) {
        res.status(500).json({message: "Faild to created Customer database"});
    }
};

exports.getCustomer=async(req, res)=>{
    try {
        const getall=await Customer.findAll({});
        res.status(200).json(getall);
    } catch (error) {
        res.status(500).json({message: "Faild to get Customer data", error: error.message});
    }
};


exports.getCustomerSuspended=async(req, res)=>{
    try {
        const getallsus=await Customer.findAll({where:{is_suspended:0}});
        res.status(200).json(getallsus);
    } catch (error) {
        res.status(500).json({message: "Faild to get Customer data", error: error.message});
    }
};

exports.getCustomerById=async(req, res)=>{
    try {
        const {CustomerId}=req.params;
        const getallbyid=await Customer.findOne({where:{id:CustomerId},
        include:{
                model: Leave, as: "leave",
                attributes: ["id", "leave_reason", "leave_duration", "on_leave" ]
            }

           
        });
        res.status(200).json(getallbyid);
    } catch (error) {
        res.status(500).json({message: "Faild to Get Customer data by ID", error: error.message});
    }
}




exports.updateCustomer=async(req,res)=>{
    try {
        const {
            card_number,
            card_type,
            card_expired,
            collected,
            issued_by,

        }=req.body;

        const {id}=req.params;

        const allCustomer=await Customer.findByPk(id);
        if(!allCustomer){
            return res.status(404).json({
                success: false,
                message: "Customer not found"
            })
        }
        await allCustomer.update({
            card_number: card_number || allCustomer.card_number,
            card_type: card_type || allCustomer.card_type,
            card_expired: card_expired || allCustomer.card_expired,
            collected: collected || allCustomer.collected,
            issued_by: issued_by || allCustomer.issued_by,
        });
        res.status(200).json({message: "Customer Updated successfully", allCustomer});
    } catch (error) {
        res.status(500).json({message: "Faild to update Customer database"});
    }
};

// exports.deleteCustomer=async(req,res)=>{
//     try {
//         const {id}=req.params;

//         const deleteNow=await Customer.destroy({where: {id}});

//         if(deleteNow){
//             return res.json(200).json({
//                 message: "Customer Data deleted successfully"
//             })
//         }else{
//             res.status(404).json({
//                 message: "Customer not found"
//             });
//         }
//     } catch (error) {
//         res.status(500).json({
//             message:"Faild to delete Customer", error: error.message
//         })
//     }
// }

exports.deleteCustomer=async(req,res)=>{
    try {
        const {id}=req.params;
        const deleteIn=await Customer.destroy({where:{id}});
        res.status(200).json({message: "invetory deleted successfully", deleteIn});
    } catch (error) {
        res.status(500).json({message: "Faild to delete Inventory", error: error.message});
    }
}
