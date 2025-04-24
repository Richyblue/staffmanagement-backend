const DataTypes=require("sequelize");
const sequelize=require("../config/db");
const Staff=require("../models/Staff");

const Gurantor=sequelize.define("quarantor_form",{
    surname:{type:DataTypes.STRING,allowNull:true},
    other_name:{type:DataTypes.STRING,allowNull:true},
    email:{type:DataTypes.STRING, allowNull:true},
    phone:{type:DataTypes.STRING, allowNull:true},
    gender:{type:DataTypes.STRING, allowNull:true},
    religion:{type:DataTypes.STRING, allowNull:true},
    marital_status:{type:DataTypes.STRING, allowNull:true},
    year_of_relationship:{type:DataTypes.STRING, allowNull:true},
    address:{type:DataTypes.STRING, allowNull:true},
    nearest_bus_stop:{type:DataTypes.STRING, allowNull:true},
    closest_landmark:{type:DataTypes.STRING, allowNull:true},
    business_name:{type:DataTypes.STRING, allowNull:true},
});

Gurantor.belongsTo(Staff,{foreignKey:"staffId", onDelete:"CASCADE"});
Staff.hasMany(Gurantor,{foreignKey:"staffId"});

module.exports=Gurantor;
