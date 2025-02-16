const Enrollment = require("../models/Enrollment");

// Enroll in a course
const enrollCourse = async (req, res) => {
    try{
      const { courseId } = req.body;
      const userId = req.user.id;
      
      // Check if already enrolled
      const existngEnrollment = await Enrollment.findOne({ userId, courseId });
      if (existngEnrollment) return res.status(400).json({ message: "Already enrolled in this course" });

      const enrollment = new Enrollment({ userId, courseId });
      await enrollment.save();
      
      res.status(201).json(enrollment);
    } catch(error){
        res.status(500).json({ message: error.message });
    }
};

// Get User Enrollments
const getUserEnrollments = async (req, res) => {
  try{
    const { userId } = req.params;
    const enrollments = await Enrollment.find({ userId }).populate("courseId");
    
    res.status(200).json(enrollments);
  } catch(error){
    res.status(500).json({ message: error.message });
  }
};

// Update Progress
const updateProgress = async (req, res) => {
    try{
     const { enrollmentId } = req.params;
     const { progress } = req.body;
     
     const enrollment = await Enrollment.findByIdAndUpdate(
        enrollmentId,
        { progress, completed: progress === 100 },
        { new: true }
     );

     if(!enrollment) return res.status(404).json({ message: "Enrollment not found." });
     
     res.status(200).json(enrollment);
    } catch(error){
        res.status(500).json({ message: error.message });
    }
};

module.exports = { enrollCourse, getUserEnrollments, updateProgress };