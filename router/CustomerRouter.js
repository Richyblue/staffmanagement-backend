const express=require("express");
const router=express.Router();
const Customer=require("../controller/CustomerController");
const authMiddleware=require("../middleware/authMiddleware");


router.post('/Customer',authMiddleware, Customer.createCustomer);
router.get('/Customer',authMiddleware, Customer.getCustomer);
router.put('/Customer/:id',authMiddleware, Customer.updateCustomer);
router.delete('/Customer/:id',authMiddleware, Customer.deleteCustomer);
router.get('/Customer/:CustomerId',authMiddleware, Customer.getCustomerById);
router.get('/Customer/st',authMiddleware, Customer.getCustomerSuspended);

module.exports=router;