const sequelize = require("../config/db");
const Staff = require("./Staff");
const Leave = require("./Leave");
const BankDetails = require("./BankDetails");

// Sync Database
sequelize
  .sync({ alter: true }) // Use { force: true } to drop existing tables (DANGER: DATA LOSS)
  .then(() => console.log("Database synced successfully"))
  .catch((err) => console.error("Database sync error:", err));

module.exports = { sequelize, Staff, Leave, BankDetails };