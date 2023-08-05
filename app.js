const express = require("express");
const { cars, movies, galaxy, choclates } = require("./data");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/movies", (req, res) => {
    res.render("movies", { title: "Movies", movies });
});

app.get("/cars", (req, res) => {
    res.render("cars", { title: "Cars", cars });
});

app.get("/galaxy", (req, res) => {
    res.render("galaxy", { title: "Galaxy", galaxy });
});

app.get("/choclates", (req, res) => {
    res.render("choclates", { title: "Choclates", choclates });
});

app.listen(3002);
