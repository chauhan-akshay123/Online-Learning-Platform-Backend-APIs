const express = require("express");
const { makePayment, getUserPayments } = require("../controllers/paymentController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: Payment processing APIs
 */

/**
 * @swagger
 * /payments:
 *   post:
 *     summary: Make a payment
 *     description: Allows a user to make a payment for a course.
 *     tags: [Payments]
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
 *               amount:
 *                 type: number
 *                 example: 499.99
 *     responses:
 *       201:
 *         description: Payment successful
 *       400:
 *         description: Payment failed
 *       401:
 *         description: Unauthorized (No token)
 */
router.post("/", protect, makePayment);

/**
 * @swagger
 * /payments/{userId}:
 *   get:
 *     summary: Get user payment history
 *     description: Fetch all payments made by a specific user.
 *     tags: [Payments]
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
 *         description: List of payments
 *       401:
 *         description: Unauthorized (No token)
 *       404:
 *         description: User not found
 */
router.get("/:userId", protect, getUserPayments);

module.exports = router;
