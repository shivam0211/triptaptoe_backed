const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const upload = require("express-fileupload");
const fs = require("fs");
const port = 3000;

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(upload());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
);

const userRoute = require("./src/routes/User_route");

app.use("/user", userRoute);


app.get("/", (req, res, next) => {
  res.send("Node start");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



// app.get("/admin", (req, res, next) => {
//   fs.readFile("./admin/index.html", null, (err, data) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.write(data);
//     }
//   });
// });

// app.get("/", (req, res, next) => {
//   res.send("Node start");
// });

// mongoose
//   .connect(process.env.MongoDB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     app.listen(port, console.log(`Server started at porst ${port}`));
//   })
//   .catch(err => console.log(err));
