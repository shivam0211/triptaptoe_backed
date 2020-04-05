const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
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
const flightRoute = require("./src/routes/Flight_Route");
const hotelroute = require("./src/routes/Hotel_route");

app.use("/user", userRoute);
app.use("/flights",flightRoute);
app.use("/hotels",hotelroute);

app.get("/", (req, res, next) => {
  res.send("Node start");
});




// This route renews tokenid an needs to be called in every 24 hours
app.post("/authenticate",(req,res,next)=>{
      var data1 = {
        "ClientId": process.env.ClientId,
        "UserName": process.env.UserName,
        "Password": process.env.Password, 
        "EndUserIp": process.env.EndUserIp
      };
      axios({
        method: 'POST',
        url: 'http://api.tektravels.com/SharedServices/SharedData.svc/rest/Authenticate',
        headers: {
          'Content-Type': 'application/json'
        },
        data:data1
      }).then((response)=>{
        //res.send(response.data.TokenId);
                const fs = require('fs') 
                const envfile = require('envfile')
                const sourcePath = '.env'
                let parsedFile = envfile.parseFileSync(sourcePath);
                parsedFile.TokenId = response.data.TokenId;
                fs.writeFileSync('./.env', envfile.stringifySync(parsedFile)) 
                res.send("file was renewed");
         },(error)=>{res.send(error)}
      );
});


app.listen(port, () => console.log(`Server listening on port ${port}!`))



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


