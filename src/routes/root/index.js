const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.html("index.html");
});

module.exports = router;
