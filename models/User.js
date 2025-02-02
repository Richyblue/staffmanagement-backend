const DataTypes=require("sequelize");
const sequelize=require("../config/db");

const User=sequelize.define("user",{
    username:{type:DataTypes.STRING,allowNull:true, unique:true},
    password:{type:DataTypes.STRING,allowNull:false},
    fullname:{type:DataTypes.STRING,allowNull:true},
    role:{type:DataTypes.STRING,allowNull:true}
});

module.exports=User;