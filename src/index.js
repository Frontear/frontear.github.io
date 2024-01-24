// module imports
const express = require("express");
const path = require("path");

// usage of modules
const app = express();

// environment vars
const port = process.env.PORT || 3000;

// middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use("/", require("./routes"));

// root route, responds with a simple Hello World!
// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

app.get("*", (req, res) => {
    res.send("404 Not Found");
});

// starts a server on port, listens for connections and handles with routes defined (like above)
app.listen(port, () => {
    console.log(`Deployed at https://127.0.0.1:${port}`);
});
