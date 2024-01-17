const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const rootRouter = require("./routes/root");

// TODO: why does express.static("public"); not work, but this does?
app.use(express.static(path.join(__dirname, "public")));

app.use("/", rootRouter);

app.listen(port, () => {
    console.log(`Hosting on https://127.0.0.1:${port}/`);
});
