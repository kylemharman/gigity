const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

// DB Config
const db = process.env.DATABASE_URL;
// Connect to MongoDB
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

app.use(express.static("public")); // the React app will be bundled and placed in the public folder

// Routes
app.use("/api/users", users);

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
