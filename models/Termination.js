const DataTypes=require("sequelize");
const sequelize=require("../config/db");
const Staff=require("../models/Staff");

const Termination=sequelize.define("termination",{
    is_terminated:{type:DataTypes.INTEGER,allowNull:true},
    reason:{type:DataTypes.TEXT,allowNull:true},
    duration:{type:DataTypes.STRING, allowNull:true}
});

Termination.belongsTo(Staff,{foreignKey:"staffId", onDelete:"CASCADE"});
Staff.hasMany(Termination,{foreignKey:"staffId"});

module.exports=Termination;