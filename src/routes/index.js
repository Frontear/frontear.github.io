const express = require("express");

const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("Got a GET at '/'");
// });

router.get("/", (req, res) => {
    res.render("index.html");
});

router.post("/", (req, res) => {
    res.status(200).send("Got a POST at '/'");
});

module.exports = router;
