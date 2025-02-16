const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Register User
const register = async (req, res) => {
    try{
      const { name, email, password, role } = req.body;
      
      let user = await User.findOne({ email });
      if (user) return res.status(400).json({ message: "User already exists. Please login" });

      user = new User({ name, email, password, role });
      await user.save();
      
      res.status(201).json({ message: "User registered successfully." });
    } catch(error){
        res.status(500).json({ message: error.message });
    }
};

// Login User
const login = async (req, res) => {
    try{
      const { email, password } = req.body;
      
      const user = await User.findOne({ email });
      if(!user) return res.status(400).json({ message: "Invalid credentials" });

      const isMatch = await user.matchPassword(password);
      if(!isMatch) return res.status(400).json({ message: "Invalid credentials" });

      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
      
      res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role} });
    } catch(error){
        res.status(500).json({ message: error.message });
    }
};

module.exports = { register, login };