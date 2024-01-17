const app = require("express")();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Under construction");
});

app.listen(port, () => {
    console.log(`Hosting on https://127.0.0.1:${port}/`);
});
