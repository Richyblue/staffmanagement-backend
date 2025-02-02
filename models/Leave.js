const DataTypes=require("sequelize");
const sequelize=require("../config/db");
const Staff=require("../models/Staff");

const Leave=sequelize.define("leave",{
    on_leave:{type:DataTypes.INTEGER,allowNull:true},
    leave_reason:{type:DataTypes.TEXT,allowNull:true},
    leave_duration:{type:DataTypes.STRING, allowNull:true},
    staff_name:{type:DataTypes.STRING, allowNull:true}
});

Leave.belongsTo(Staff,{foreignKey:"staffId", as: "leaves"});
Staff.hasMany(Leave,{foreignKey:"staffId"});

module.exports=Leave;