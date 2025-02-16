const Payment = require("../models/Payment");

// Make a payment
const makePayment = async (req, res) => {
    try{
      const { courseId, amount } = req.body;
      const userId = req.user.id;
      
      const payment = new Payment({ userId, courseId, amount, status: "completed" });
      await payment.save();

      res.status(201).json(payment);
    } catch(error){
        res.status(500).json({ message: error.message });
    }
};

// Get User Payments
const getUserPayments = async (req, res) => {
    try{
      const { userId } = req.params;
      const payments = await Payment.find({ userId }).populate("courseId"); 

      res.status(200).json(payments); 
    } catch(error){
        res.status(500).json({ message: error.message });
    }
};

module.exports = { makePayment, getUserPayments };