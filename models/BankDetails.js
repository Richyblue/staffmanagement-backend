const DataTypes=require("sequelize");
const sequelize=require("../config/db");
const Staff=require("../models/Staff");

const BankDetails=sequelize.define("bank_details",{
    bank_name:{type:DataTypes.STRING,allowNull:true},
    beneficiary:{type:DataTypes.STRING,allowNull:true},
    acc_number:{type:DataTypes.STRING,allowNull:true},
});

BankDetails.belongsTo(Staff,{foreignKey:"staffId", as: "bank_details"});
Staff.hasMany(BankDetails,{foreignKey:"staffId"});

module.exports=BankDetails;