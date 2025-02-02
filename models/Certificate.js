const DataTypes=require("sequelize");
const sequelize=require("../config/db");
const Staff=require("../models/Staff");

const Certificate=sequelize.define("certificate",{
    title:{type:DataTypes.STRING,allowNull:true},
    year:{type:DataTypes.STRING,allowNull:true},
    from:{type:DataTypes.STRING,allowNull:true},
});

Certificate.belongsTo(Staff,{foreignKey:"staffId", onDelete:"CASCADE"});
Staff.hasMany(Certificate,{foreignKey:"staffId"})

module.exports=Certificate