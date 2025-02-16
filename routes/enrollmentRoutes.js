const express = require("express");
const { enrollCourse, getUserEnrollments, updateProgress } = require("../controllers/enrollmentController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Enrollment
 *   description: Course enrollment APIs
 */

/**
 * @swagger
 * /enrollments:
 *   post:
 *     summary: Enroll in a course
 *     description: Allows a user to enroll in a specific course.
 *     tags: [Enrollment]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courseId:
 *                 type: string
 *                 example: "65b12345678abcd123456789"
 *     responses:
 *       201:
 *         description: Enrollment successful
 *       400:
 *         description: Already enrolled
 *       401:
 *         description: Unauthorized (No token)
 */
router.post("/", protect, enrollCourse);

/**
 * @swagger
 * /enrollments/{userId}:
 *   get:
 *     summary: Get user's enrolled courses
 *     description: Fetch all courses that a user is enrolled in.
 *     tags: [Enrollment]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         example: "65b7890abcdef1234567890"
 *     responses:
 *       200:
 *         description: List of enrolled courses
 *       401:
 *         description: Unauthorized (No token)
 *       404:
 *         description: User not found
 */
router.get("/:userId", protect, getUserEnrollments);

/**
 * @swagger
 * /enrollments/progress/{enrollmentId}:
 *   put:
 *     summary: Update course progress
 *     description: Allows a user to update their course progress.
 *     tags: [Enrollment]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: enrollmentId
 *         required: true
 *         schema:
 *           type: string
 *         example: "65cdef7890abcdef12345678"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               progress:
 *                 type: number
 *                 example: 50
 *     responses:
 *       200:
 *         description: Progress updated successfully
 *       401:
 *         description: Unauthorized (No token)
 *       404:
 *         description: Enrollment not found
 */
router.put("/progress/:enrollmentId", protect, updateProgress);

module.exports = router;
