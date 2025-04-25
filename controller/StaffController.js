// const Staff=require("../models/Staff");
const BankDetails=require("../models/BankDetails");
const Gurantor =require("../models/Guarantor");
// const Leave=require("../models/Leave");

const { Staff, Leave, Attendance } = require("../models");

exports.createStaff=async(req,res)=>{
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
            bvn,
            language,
            role,
            bank_name,
            beneficiary,
            acc_number,
            nin_number,
            dob
            
        }=req.body;

        const allStaff=await Staff.create({
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
            bvn,
            language,
            role,
            bank_name,
            beneficiary,
            acc_number,
            nin_number,
            dob
            
            
        });
        res.status(200).json({message: "Staff created successfully", allStaff});
    } catch (error) {
        res.status(500).json({message: "Faild to created staff database"});
    }
};


exports.createStaffQr=async(req,res)=>{
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
            bvn,
            language,
            role,
            bank_name,
            beneficiary,
            acc_number,
            nin_number,
            dob
            
        }=req.body;

        const allStaff=await Staff.create({
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
            bvn,
            language,
            role,
            bank_name,
            beneficiary,
            acc_number,
            nin_number,
            dob
            
            
        });
        res.status(200).json({message: "Staff created successfully", allStaff});
    } catch (error) {
        res.status(500).json({message: "Faild to created staff database"});
    }
};


exports.getStaff=async(req, res)=>{
    try {
        const getall=await Staff.findAll({});
        res.status(200).json(getall);
    } catch (error) {
        res.status(500).json({message: "Faild to get staff data", error: error.message});
    }
};


exports.getStaffSuspended=async(req, res)=>{
    try {
        const getallsus=await Staff.findAll({where:{is_suspended:0}});
        res.status(200).json(getallsus);
    } catch (error) {
        res.status(500).json({message: "Faild to get staff data", error: error.message});
    }
};

exports.getStaffById=async(req, res)=>{
    try {
        const {id}=req.params;
        const getallbyid=await Staff.findAll({where:{id}  
        });
        res.status(200).json(getallbyid);
    } catch (error) {
        res.status(500).json({message: "Faild to Get staff data by ID", error: error.message});
    }
}




exports.updateStaff=async(req,res)=>{
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
            bvn,
            language,
            role,
        }=req.body;

        const {id}=req.params;

        const allStaff=await Staff.findByPk(id);
        if(!allStaff){
            return res.status(404).json({
                success: false,
                message: "Staff not found"
            })
        }
        await allStaff.update({
            first_name: first_name || allStaff.first_name,
            last_name: last_name || allStaff.last_name,
            email: email || allStaff.email,
            phone: phone || allStaff.phone,
            country: country || allStaff.country,
            state: state || allStaff.state,
            city: city || allStaff.city,
            address: address || allStaff.address,
            gender: gender || allStaff.gender,
            marital_status: marital_status || allStaff.marital_status,
            bvn:bvn || allStaff.bvn,
            language: language || allStaff.language,
            role: role || allStaff.role,
        });
        res.status(200).json({message: "Staff Updated successfully", allStaff});
    } catch (error) {
        res.status(500).json({message: "Faild to update staff database"});
    }
};

// exports.deleteStaff=async(req,res)=>{
//     try {
//         const {id}=req.params;

//         const deleteNow=await Staff.destroy({where: {id}});

//         if(deleteNow){
//             return res.json(200).json({
//                 message: "Staff Data deleted successfully"
//             })
//         }else{
//             res.status(404).json({
//                 message: "Staff not found"
//             });
//         }
//     } catch (error) {
//         res.status(500).json({
//             message:"Faild to delete staff", error: error.message
//         })
//     }
// }

exports.deleteStaff=async(req,res)=>{
    try {
        const {id}=req.params;
        const deleteIn=await Staff.destroy({where:{id}});
        res.status(200).json({message: "invetory deleted successfully", deleteIn});
    } catch (error) {
        res.status(500).json({message: "Faild to delete Inventory", error: error.message});
    }
}




// Get Staff Details with Salary & Attendance
exports.getStaffDetails = async (req, res) => {
  try {
    const {staffId} = req.params;

    const staff = await Staff.findOne({
      where: { id: staffId },
      include: [
        { model: Leave, as: "leaves" }, // Include Salary data
        { model: BankDetails, as: "bank_details" }, // Include Attendance records
      ],
    });

    if (!staff) {
      return res.status(404).json({ error: "Staff not found" });
    }

    res.json(staff);
  } catch (error) {
    console.error("Error fetching staff details:", error);
    res.status(500).json({ error: "Internal Server Error",error: error.message });
  }
};


exports.updateStaffOthers=async(req,res)=>{
    try {
        const {
            parent_name,
            parent_address,
            parent_number,
            parent_email,
            extended_name,
            extended_address,
            extended_number,
            extended_email,
            friend_name,
            friend_address,
            friend_number,
            friend_email,

        }=req.body;

        const {id}=req.params;

        const allotherStaff=await Staff.findByPk(id);
        if(!allotherStaff){
            return res.status(404).json({
                success: false,
                message: "Staff not found"
            })
        }
        await allotherStaff.update({
            parent_name: parent_name || allotherStaff.parent_name,
            parent_address: parent_address || allotherStaff.parent_address,
            parent_number: parent_number || allotherStaff.parent_number,
            parent_email: parent_email || allotherStaff.parent_email,
            extended_name: extended_name || allotherStaff.extended_name,
            extended_address: extended_address || allotherStaff.extended_address,
            extended_number: extended_number || allotherStaff.extended_number,
            extended_email: extended_email || allotherStaff.extended_email,
            friend_name: friend_name || allotherStaff.friend_name,
            friend_address: friend_address || allotherStaff.friend_address,
            friend_number: friend_number || allotherStaff.friend_number,
            friend_email: friend_email || allotherStaff.friend_email,
        });
        res.status(200).json({message: "Staff Updated successfully", allotherStaff});
    } catch (error) {
        res.status(500).json({message: "Faild to update staff database"});
    }
};


exports.updateStaffMedical=async(req,res)=>{
    try {
        const {
            medical_name,
            medical_address,
            medical_number,
            medical_email,

        }=req.body;

        const {id}=req.params;

        const staffMedical=await Staff.findByPk(id);
        if(!staffMedical){
            return res.status(404).json({
                success: false,
                message: "Staff not found"
            })
        }
        await staffMedical.update({
            medical_name: medical_name || staffMedical.medical_name,
            medical_address: medical_address || staffMedical.medical_address,
            medical_number: medical_number || staffMedical.medical_number,
            medical_email: medical_email || staffMedical.medical_email,
        });
        res.status(200).json({message: "Staff Updated successfully", staffMedical});
    } catch (error) {
        res.status(500).json({message: "Faild to update staff database"});
    }
};


exports.updateStaffFriends=async(req,res)=>{
    try {
        const {
            friend_name,
            friend_address,
            friend_number,
            friend_email,

        }=req.body;

        const {id}=req.params;

        const staffFriend=await Staff.findByPk(id);
        if(!staffFriend){
            return res.status(404).json({
                success: false,
                message: "Staff not found"
            })
        }
        await staffFriend.update({
            friend_name: friend_name || staffFriend.friend_name,
            friend_address: friend_address || staffFriend.friend_address,
            friend_number: friend_number || staffFriend.friend_number,
            friend_email: friend_email || staffFriend.friend_email,
        });
        res.status(200).json({message: "Staff friends Updated successfully", staffFriend});
    } catch (error) {
        res.status(500).json({message: "Faild to update staff database"});
    }
};


exports.updateStaffParent=async(req,res)=>{
    try {
        const {
            parent_name,
            parent_address,
            parent_number,
            parent_email,

        }=req.body;

        const {id}=req.params;

        const staffParent=await Staff.findByPk(id);
        if(!staffParent){
            return res.status(404).json({
                success: false,
                message: "Staff not found"
            })
        }
        await staffParent.update({
            parent_name: parent_name || staffParent.parent_name,
            parent_address: parent_address || staffParent.parent_address,
            parent_number: parent_number || staffParent.parent_number,
            parent_email: parent_email || staffParent.parent_email,
        });
        res.status(200).json({message: "Staff Parents Updated successfully", staffParent});
    } catch (error) {
        res.status(500).json({message: "Faild to update staff database"});
    }
};


exports.updateStaffExtended=async(req,res)=>{
    try {
        const {
            extended_name,
            extended_address,
            extended_number,
            extended_email,

        }=req.body;

        const {id}=req.params;

        const staffExtended=await Staff.findByPk(id);
        if(!staffExtended){
            return res.status(404).json({
                success: false,
                message: "Staff not found"
            })
        }
        await staffExtended.update({
            extended_name: extended_name || staffExtended.extended_name,
            extended_address: extended_address || staffExtended.extended_address,
            extended_number: extended_number || staffExtended.extended_number,
            extended_email: extended_email || staffExtended.extended_email,
        });
        res.status(200).json({message: "Staff Parents Updated successfully", staffExtended});
    } catch (error) {
        res.status(500).json({message: "Faild to update staff database"});
    }
};


exports.updateStaffStatus=async(req,res)=>{
    try {
        const {
            is_terminated,
            

        }=req.body;

        const {id}=req.params;

        const staffStatus=await Staff.findByPk(id);
        if(!staffStatus){
            return res.status(404).json({
                success: false,
                message: "Staff not found"
            })
        }
        await staffStatus.update({
            is_terminated: is_terminated || staffStatus.is_terminated,
        });
        res.status(200).json({message: "Staff Parents Updated successfully", staffStatus});
    } catch (error) {
        res.status(500).json({message: "Faild to update staff database"});
    }
};

exports.updateStaffStatusTwo=async(req,res)=>{
    try {
        const {
            status,
            

        }=req.body;

        const {id}=req.params;

        const staffStatusTwo=await Staff.findByPk(id);
        if(!staffStatusTwo){
            return res.status(404).json({
                success: false,
                message: "Staff not found"
            })
        }
        await staffStatusTwo.update({
            status: status || staffStatusTwo.status,
        });
        res.status(200).json({message: "Staff Parents Updated successfully", staffStatusTwo});
    } catch (error) {
        res.status(500).json({message: "Faild to update staff database"});
    }
};


// Check if staff email exists
exports.checkEmail = async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
  
    try {
      const staff = await Staff.findOne({ where: { email } });
  
      if (staff) {
        return res.json({
          exists: true,
          staff_id: staff.id,
          friend_email: staff.friend_email || null,
          first_name: staff.first_name || null,
          last_name: staff.last_name || null
        });
      } else {
        return res.json({ exists: false });
      }
    } catch (error) {
      console.error("Error checking email:", error);
      return res.status(500).json({ message: "Server error" });
    }
  };

exports.createGurantors = async (req, res) => {
    try {
        const {
            surname,
            other_name,
            email,
            phone,
            gender,
            religion,
            marital_status,
            year_of_relationship,
            address,
            nearest_bus_stop,
            closest_landmark,
            business_name
        } = req.body;

        const { staffId } = req.params;

        // Check existing guarantors for the staff
        const existingGuarantors = await Gurantor.count({ where: { staffId } });

        if (existingGuarantors >= 3) {
            return res.status(400).json({
                message: "You have already added the maximum of 3 guarantors for this staff."
            });
        }

        // Create the new guarantor
        const allGuarantor = await Gurantor.create({
            surname,
            other_name,
            email,
            phone,
            gender,
            religion,
            marital_status,
            year_of_relationship,
            address,
            nearest_bus_stop,
            closest_landmark,
            business_name,
            staffId: staffId
        });

        const remaining = 2 - existingGuarantors;

        res.status(200).json({
            message: `Guarantor added successfully. ${remaining} more remaining.`,
            allGuarantor
        });

    } catch (error) {
        console.error("Error creating guarantor:", error);
        res.status(500).json({
            message: "Failed to create staff guarantor."
        });
    }
};

// GET /api/v1/staff/gurantor/staff/:staffId
exports.getGuarantorsByStaffId = async (req, res) => {
    try {
        const { staffId } = req.params;

        // Fetch all guarantors for this staff ID
        const guarantors = await Gurantor.findAll({
            where: { staffId },
        });

        return res.status(200).json(guarantors);
    } catch (error) {
        console.error("Error fetching guarantors by staffId:", error);
        return res.status(500).json({
            message: "An error occurred while fetching guarantors.",
        });
    }
};









