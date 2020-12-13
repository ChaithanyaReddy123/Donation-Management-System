const express = require('express');
const path = require("path");
const app = express();

const port = 4545;

const static_path = path.join(__dirname, "../public");



app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));

app.set("views", templates_path);

app.get("/", (req, res) => {
    res.render("microservice1");
});


app.get("*", (req, res) => {
    res.send("This page does not exist");
});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});