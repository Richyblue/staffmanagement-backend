const DataTypes=require("sequelize");
const sequelize=require("../config/db");

const Files=sequelize.define("files",{
    staff_name:{type:DataTypes.STRING,allowNull:true},
    files:{type:DataTypes.STRING,allowNull:true},
    file_name:{type:DataTypes.STRING,allowNull:true},
});

module.exports=Files;