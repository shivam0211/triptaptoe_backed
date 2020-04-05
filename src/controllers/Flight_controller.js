const Flight = require('../models/Flight_model');
const axios = require('axios');

exports.getflights = (req,res,next) => {
      console.log(req.body);
      var data1 = JSON.stringify(req.body);
      var request = require('request');
      
      axios({
        method: 'POST',
        url: 'http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search/',
        headers: {
          'Content-Type': 'application/json'
        },
        data:data1
      }).then((response)=>{
         res.send(response.data);
        //console.log(response.data);
      },(error)=>{res.send(error)}
      );
      

};
