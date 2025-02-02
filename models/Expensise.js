const DataTypes=require("sequelize");
const sequelize=require("../config/db");

const Expensis=sequelize.define("expensis",{
    items:{type:DataTypes.STRING,allowNull:true},
    e_quantity:{type:DataTypes.STRING,allowNull:true},
    unit_price:{type:DataTypes.STRING,allowNull:true},
    expensis_for:{type:DataTypes.STRING,allowNull:true},

});

module.exports=Expensis;