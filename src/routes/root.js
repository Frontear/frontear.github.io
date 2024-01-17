const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    // https://stackoverflow.com/questions/25463423/res-sendfile-absolute-path
    res.sendFile("public/index.html", { root: path.dirname(__dirname) });
});

module.exports = router;
