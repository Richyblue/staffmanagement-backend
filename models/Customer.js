const DataTypes=require("sequelize");
const sequelize=require("../config/db");

const Customer=sequelize.define("customer",{
    first_name:{type:DataTypes.STRING, allowNull:true},
    last_name:{type:DataTypes.STRING, allowNull:true},
    email:{type:DataTypes.STRING, allowNull: true,},
    phone:{type:DataTypes.STRING,allowNull:true},
    country:{type:DataTypes.STRING,allowNull:true},
    state:{type:DataTypes.STRING,allowNull:true},
    city:{type:DataTypes.STRING,allowNull:true},
    address:{type:DataTypes.TEXT,allowNull:true},
    gender:{type:DataTypes.STRING,allowNull:true},
    marital_status:{type:DataTypes.STRING,allowNull:true},
    office:{type:DataTypes.STRING,allowNull:true},
    language:{type:DataTypes.STRING,allowNull:true},
    card_number:{type:DataTypes.STRING,allowNull:true},
    card_type:{type:DataTypes.STRING,allowNull:true},
    card_expired:{type:DataTypes.DATE,allowNull:true},
    collected:{type:DataTypes.INTEGER,allowNull:true},
    issued_by:{type:DataTypes.STRING,allowNull:true},

});

module.exports=Customer;