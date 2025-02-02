const DataTypes=require("sequelize");
const sequelize=require("../config/db");
const Staff=require("../models/Staff");

const Education=sequelize.define("education",{
    name:{type:DataTypes.STRING,allowNull:true},
    year_start:{type:DataTypes.DATE,allowNull:true},
    year_end:{type:DataTypes.DATE,allowNull:true},
    title:{type:DataTypes.STRING,allowNull:true},

});

Education.belongsTo(Staff,{foreignKey:"staffId", onDelete:"CASCADE"});
Staff.hasMany(Education,{foreignKey:"staffId"});

module.exports=Education;

