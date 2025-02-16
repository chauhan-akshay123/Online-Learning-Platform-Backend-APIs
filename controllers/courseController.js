const Course = require("../models/Course");
const mongoose = require("mongoose");

// Create course (Instructor Only)
const createCourse = async (req, res) => {
    try{
      const { title, description, price, content } = req.body;
      const instructorId = req.user.id;

      const course = new Course({ title, description, price, content, instructorId });
      await course.save();
      
      res.status(201).json({ course });
    } catch(error){
        res.status(500).json({ message: error.message });
    }
};

// Get all courses
const getAllCourses = async (req, res) => {
    try{
      const courses = await Course.find().populate("instructorId", "name email");
      res.status(200).json(courses);
    } catch(error){
        res.status(500).json({ message: error.message });
    }
};

// Update Course (Instructor only)
const updateCourse = async (req, res) => {
    try {
      const courseId = req.params.id.trim(); // Course ID from URL
      const instructorId = req.user.id; // Instructor ID from JWT
  
      // Validate if `courseId` is a valid MongoDB ObjectId
      if (!mongoose.Types.ObjectId.isValid(courseId)) {
        return res.status(400).json({ message: "Invalid course ID" });
      }
  
      // Find the course
      const course = await Course.findById(courseId);
  
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
  
      // Check if the logged-in user is the instructor who created the course
      if (course.instructorId.toString() !== instructorId) {
        return res.status(403).json({ message: "You are not authorized to update this course" });
      }
  
      // Update the course
      const updatedCourse = await Course.findByIdAndUpdate(courseId, req.body, { new: true });
  
      res.status(200).json(updatedCourse);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

// Delete Course (Instrutor/Admin Only)
const deleteCourse = async (req, res) => {
    try{
      const { id } = req.params;
      const deletedCourse = await Course.findByIdAndDelete(id);
      
      if(!deletedCourse) return res.status(404).json({ message: "Course not found" });
      
      res.status(200).json({ message: "Course deleted successfully" });
    } catch(error){
       res.status(500).json({ message: error.message }); 
    }
};

module.exports = { createCourse, getAllCourses, updateCourse, deleteCourse };