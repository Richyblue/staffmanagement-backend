require('dotenv').config();
const express=require("express")
const app=express();
const cors=require("cors");
const bodyParser=require("body-parser");
const session = require('express-session');
const passport = require('passport');
const path = require("path");
const sequelize = require('./config/db');
const StaffRouter=require("./router/Staffrouter");
const BankRouter=require("./router/bankrouter");
const Userrouter=require("./router/userRouter");
const EducationRouter=require("./router/educationRouter");
const LeaveRouter=require("./router/LeaveRouter");
const SuspendedRouter=require("./router/SuspendedRouter");
const TerminationRouter=require("./router/TerminationRouter");
const InventoryRoute=require("./router/inventryRouter");
const ExpensisRouter=require("./router/ExpensisRouter");
const CustomerRouter=require("./router/CustomerRouter");
const FileRouter=require("./router/FileRouter");
// require('./config/passport'); // Initialize Passport strategies


app.use(cors({ origin: 'http://localhost:3000' })); // Replace with your frontend URL
app.use(bodyParser.json());
const port=process.env.PORT || 8000;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: process.env.SESSION_SECRET || 'your_secret_key',
    resave: false,
    saveUninitialized: false,
}));
app.use('/uploads/images', express.static('uploads', {
    maxAge: '7d'
}));

app.use('/uploads/videos', express.static('uploads', {
    maxAge: '7d'
}));
app.use(passport.initialize());
app.use(passport.session());
// Serve static files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));



app.use('/api/v1/', StaffRouter);
app.use('/api/v1/', BankRouter);
app.use('/api/v1/', Userrouter);
app.use('/api/v1/', EducationRouter);
app.use('/api/v1/', LeaveRouter);
app.use('/api/v1/', SuspendedRouter);
app.use('/api/v1/', TerminationRouter);
app.use('/api/v1/', InventoryRoute);
app.use('/api/v1/', ExpensisRouter);
app.use('/api/v1/', CustomerRouter);
app.use('/api/v1/', FileRouter);

sequelize.sync().then(() => {
    console.log('Database synced');

app.listen(port, ()=> console.log(`Server is running on port ${port}`));

});