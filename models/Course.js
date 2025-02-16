const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
 title: {
    type: String,
    required: true
 },
 description: {
    type: String,
    required: true
 },
 price: {
    type: Number,
    required: true
},
instructorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
},
content: [{          // Array of lesson titles or video URLs
    type: String 
}]
},
{
    timestamps: true
}
);

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;