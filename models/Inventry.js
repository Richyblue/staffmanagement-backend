const DataTypes=require("sequelize");
const sequelize=require("../config/db");

const Inventry=sequelize.define("inventry",{
    product_name:{type:DataTypes.STRING,allowNull:true},
    quantity:{type:DataTypes.INTEGER,allowNull:true},
    supplier_name:{type:DataTypes.STRING, allowNull: true},
    purchase_price:{type:DataTypes.STRING,allowNull:true},
    selling_price:{type:DataTypes.STRING,allowNull:true},
    category:{type:DataTypes.STRING,allowNull:true}


});

module.exports=Inventry;