const Expensis=require("../models/Expensise");

exports.createExpensis=async(req,res)=>{
    try {
        const{items,
            e_quantity,
            unit_price,
            expensis_for,
        }=req.body;

        const createexpensis=await Expensis.create({
            items,
            e_quantity,
            unit_price,
            expensis_for
        })

        res.status(200).json({message: "Expensis created successfully", createexpensis});
    } catch (error) {
        res.status(500).json({message: "Faild to create Expensis", error: error.message});
    }
};
 
exports.getallIn=async(req,res)=>{
    try {
        const getall=await Expensis.findAll({});
        res.status(200).json(getall);
    } catch (error) {
        res.status(500).json({message: "Faild to fetch Inventory", error: error.message});
    }
}


exports.createExpensisUpdate=async(req,res)=>{
    try {
        const{items,
            e_quantity,
            unit_price,
            expensis_for,
        }=req.body;
        const {id} =req.params;
        const createexpensis=await Expensis.findByPk(id)
        if(!createexpensis){
            return res.status(404).json(
                {
                    success: false,
                    message:"Inventory not found"
                }
            )
        }
        await createexpensis.update({
            items: items || createexpensis.items ,
            e_quantity:e_quantity || createexpensis.e_quantity,
            unit_price: unit_price || createexpensis.unit_price,
            expensis_for: expensis_for || createexpensis.expensis_for,
            
        })

        res.status(200).json({message: "Inventory updated successfully", createexpensis});
    } catch (error) {
        res.status(500).json({message: "Faild to update Inventory", error: error.message});
    }
};

exports.DeleteIn=async(req,res)=>{
    try {
        const {id}=req.params;
        const deleteIn=await Expensis.destroy({where:{id}});
        res.status(200).json({message: "invetory deleted successfully", deleteIn});
    } catch (error) {
        res.status(500).json({message: "Faild to delete Inventory", error: error.message});
    }
}

exports.getExpensisById=async(req, res)=>{
    try {
        const {id}=req.params;
        const getallbyid=await Expensis.findAll({where:{id}  
        });
        res.status(200).json(getallbyid);
    } catch (error) {
        res.status(500).json({message: "Faild to Get expensis data by ID", error: error.message});
    }
}
