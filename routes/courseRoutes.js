const express = require("express");
const {
  createCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");
const protect = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: Course management APIs
 */

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Create a new course
 *     description: Allows an instructor to create a new course.
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "JavaScript for Beginners"
 *               description:
 *                 type: string
 *                 example: "Learn JavaScript from scratch."
 *               price:
 *                 type: number
 *                 example: 499
 *               content:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Introduction", "Variables", "Functions"]
 *     responses:
 *       201:
 *         description: Course created successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized access
 */
router.post("/", protect, authorizeRoles("instructor"), createCourse);

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Get all courses
 *     description: Retrieve a list of all courses.
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: List of courses retrieved successfully
 */
router.get("/", getAllCourses);

/**
 * @swagger
 * /courses/{id}:
 *   put:
 *     summary: Update a course
 *     description: Allows an instructor to update a course.
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The course ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Advanced JavaScript"
 *               description:
 *                 type: string
 *                 example: "Deep dive into JavaScript."
 *               price:
 *                 type: number
 *                 example: 799
 *     responses:
 *       200:
 *         description: Course updated successfully
 *       404:
 *         description: Course not found
 *       401:
 *         description: Unauthorized access
 */
router.put("/:id", protect, authorizeRoles("instructor"), updateCourse);

/**
 * @swagger
 * /courses/{id}:
 *   delete:
 *     summary: Delete a course
 *     description: Allows an instructor or admin to delete a course.
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The course ID
 *     responses:
 *       200:
 *         description: Course deleted successfully
 *       404:
 *         description: Course not found
 *       401:
 *         description: Unauthorized access
 */
router.delete("/:id", protect, authorizeRoles("admin", "instructor"), deleteCourse);

module.exports = router;
