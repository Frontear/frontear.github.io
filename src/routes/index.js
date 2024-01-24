const express = require("express");

const router = express.Router();

router.use("/", require("./front"));
router.use("/api", require("./back"));

module.exports = router;
