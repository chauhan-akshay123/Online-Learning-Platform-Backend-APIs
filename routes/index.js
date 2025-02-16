const express = require("express");

const authRoutes = require("./authRoutes");
const courseRoutes = require("./courseRoutes");
const enrollmentRoutes = require("./enrollmentRoutes");
const paymentRoutes = require("./paymentRoutes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/courses", courseRoutes);
router.use("/enrollments", enrollmentRoutes);
router.use("/payments", paymentRoutes);

module.exports = router;
