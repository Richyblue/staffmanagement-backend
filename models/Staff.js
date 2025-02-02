const DataTypes=require("sequelize");
const sequelize=require("../config/db");

const Staff =sequelize.define("allstaff",{
    first_name:{type:DataTypes.STRING, allowNull:true},
    last_name:{type:DataTypes.STRING, allowNull:true},
    email:{type:DataTypes.STRING, allowNull: true},
    phone:{type:DataTypes.STRING,allowNull:true},
    country:{type:DataTypes.STRING,allowNull:true},
    state:{type:DataTypes.STRING,allowNull:true},
    city:{type:DataTypes.STRING,allowNull:true},
    address:{type:DataTypes.TEXT,allowNull:true},
    gender:{type:DataTypes.STRING,allowNull:true},
    marital_status:{type:DataTypes.STRING,allowNull:true},
    bvn:{type:DataTypes.STRING,allowNull:true},
    language:{type:DataTypes.STRING,allowNull:true},
    role:{type:DataTypes.STRING,allowNull:true},
    bank_name:{type:DataTypes.STRING,allowNull:true},
    beneficiary:{type:DataTypes.STRING,allowNull:true},
    acc_number:{type:DataTypes.STRING,allowNull:true},
    nin_number:{type:DataTypes.STRING,allowNull:true},
    dob:{type:DataTypes.DATE,allowNull:true},
    parent_name:{type:DataTypes.STRING,allowNull:true},
    parent_address:{type:DataTypes.STRING,allowNull:true},
    parent_number:{type:DataTypes.STRING,allowNull:true},
    parent_email:{type:DataTypes.STRING,allowNull:true},
    extended_name:{type:DataTypes.STRING,allowNull:true},
    extended_address:{type:DataTypes.STRING,allowNull:true},
    extended_number:{type:DataTypes.STRING,allowNull:true},
    extended_email:{type:DataTypes.STRING,allowNull:true},
    friend_name:{type:DataTypes.STRING,allowNull:true},
    friend_address:{type:DataTypes.STRING,allowNull:true},
    friend_number:{type:DataTypes.STRING,allowNull:true},
    friend_email:{type:DataTypes.STRING,allowNull:true},
    medical_name:{type:DataTypes.STRING,allowNull:true},
    medical_address:{type:DataTypes.STRING,allowNull:true},
    medical_number:{type:DataTypes.STRING,allowNull:true},
    medical_email:{type:DataTypes.STRING,allowNull:true},
    status:{type:DataTypes.INTEGER,allowNull:true, defaultValue: 2},
    is_terminated:{type:DataTypes.INTEGER,allowNull:true},
    is_suspended:{type:DataTypes.INTEGER,allowNull:true}

});

module.exports=Staff