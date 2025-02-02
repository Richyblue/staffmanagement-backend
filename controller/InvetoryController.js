const Inventry=require("../models/Inventry");

exports.createInvenory=async(req,res)=>{
    try {
        const{product_name,
            quantity,
            supplier_name,
            purchase_price,
            selling_price,
            category
        }=req.body;

        const createinventry=await Inventry.create({
            product_name,
            quantity,
            supplier_name,
            purchase_price,
            selling_price,
            category
        })

        res.status(200).json({message: "Inventory created successfully", createinventry});
    } catch (error) {
        res.status(500).json({message: "Faild to create Inventory", error: error.message});
    }
};
 
exports.getallIn=async(req,res)=>{
    try {
        const getall=await Inventry.findAll({});
        res.status(200).json(getall);
    } catch (error) {
        res.status(500).json({message: "Faild to fetch Inventory", error: error.message});
    }
}


exports.createInvenoryUpdate=async(req,res)=>{
    try {
        const{product_name,
            quantity,
            supplier_name,
            purchase_price,
            selling_price,
            category
        }=req.body;
        const {id} =req.params;
        const createinventry=await Inventry.findByPk(id)
        if(!createinventry){
            return res.status(404).json(
                {
                    success: false,
                    message:"Inventory not found"
                }
            )
        }
        await createinventry.update({
            product_name: product_name || createinventry.product_name ,
            quantity:quantity || createinventry.quantity,
            supplier_name: supplier_name || createinventry.supplier_name,
            purchase_price: purchase_price || createinventry.purchase_price,
            selling_price: selling_price || createinventry.selling_price,
            category: category || createinventry.category
        })

        res.status(200).json({message: "Inventory updated successfully", createinventry});
    } catch (error) {
        res.status(500).json({message: "Faild to update Inventory", error: error.message});
    }
};

exports.DeleteIn=async(req,res)=>{
    try {
        const {id}=req.params;
        const deleteIn=await Inventry.destroy({where:{id}});
        res.status(200).json({message: "invetory deleted successfully", deleteIn});
    } catch (error) {
        res.status(500).json({message: "Faild to delete Inventory", error: error.message});
    }
}