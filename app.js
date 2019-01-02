const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

const campgrounds = [
  {name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f6c57da0ecb4bb_340.jpg"},
  {name: "Granite Hill", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104491f6c57da0ecb4bb_340.jpg"},
  {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8457/7930235502_df747573ca.jpg"},
  {name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f6c57da0ecb4bb_340.jpg"},
  {name: "Granite Hill", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104491f6c57da0ecb4bb_340.jpg"},
  {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8457/7930235502_df747573ca.jpg"},
  {name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f6c57da0ecb4bb_340.jpg"},
  {name: "Granite Hill", image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104491f6c57da0ecb4bb_340.jpg"},
  {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8457/7930235502_df747573ca.jpg"}
]

/* GET ROUTES */
app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  res.render("campgrounds", {campgrounds: campgrounds});
});

// ROUTE TO SHOW THE FORM THAT SENDS DATA TO THE /CAMPGROUNDS POST ROUTE.
app.get("/campgrounds/new", function(req, res) {
  res.render("new");
});

/* POST ROUTES */
app.post("/campgrounds", function(req, res) {
  // GET DATA FROM FORM AND ADD TO CAMPGROUNDS ARRAY
  const name = req.body.name;
  const image = req.body.image;

  const newCampground = {
    name: name,
    image: image
  };

  campgrounds.push(newCampground);
  // REDIRECT BACK TO CAMPGROUNDS PAGE
  res.redirect("/campgrounds");
});

// PORT SETUP
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
