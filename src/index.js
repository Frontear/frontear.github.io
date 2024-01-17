const express = require("express");
const app = express();
const port = 3000;

const rootRouter = require("./routes/root");

app.use("/", rootRouter);

app.listen(port, () => {
    console.log(`Hosting on https://127.0.0.1:${port}/`);
});
