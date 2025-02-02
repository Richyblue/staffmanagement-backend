const DataTypes=require("sequelize");
const sequelize=require("../config/db");
const Staff=require("../models/Staff");

const Suspension=sequelize.define("suspension",{
    is_suspended:{type:DataTypes.INTEGER,allowNull:true},
    reason:{type:DataTypes.TEXT,allowNull:true},
    duration:{type:DataTypes.STRING, allowNull:true}
});

Suspension.belongsTo(Staff,{foreignKey:"staffId", onDelete:"CASCADE"});
Staff.hasMany(Suspension,{foreignKey:"staffId"});

module.exports=Suspension;