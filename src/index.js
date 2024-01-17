const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const rootRouter = require("./routes/root");

// middleware
app.use((req, res, next) => {
    res.html = file => {
        res.sendFile(`./public/${file}`, { root: __dirname });
    };
    next();
});

// routes
app.use("/", rootRouter);

// entrypoint
app.listen(port, () => {
    console.log(`Hosting on https://127.0.0.1:${port}/`);
});
