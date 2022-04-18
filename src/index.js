const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.port || 3000;

// console.log(path.join(__dirname,"../templates/views"));
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", template_path);
app.use(express.static(static_path));
hbs.registerPartials(partials_path);

app.get("/index", (req, res) => {
  res.render("index");
});
app.get("/portfolio", (req, res) => {
  res.render("portfolio");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("/contact", (req, res) => {
    res.render("contact");
  });
app.get("/", (req, res) => {
  res.render("index");
});
app.get("*", (req, res) => {
  res.render("404page",{
    errorMsg:"Opps! Page Not Found."
  });
});


app.listen(port, () => {
  console.log(`Port Listing at ${port}`);
});
