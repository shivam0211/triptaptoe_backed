const Flight = require('../models/Hotel_model');
const axios = require('axios');

exports.gethotels = (req,res,next) => {
      console.log(req.body);
      var data1 = JSON.stringify(req.body);
      
      axios({
        method: 'POST',
        url: 'http://api.tektravels.com/BookingEngineService_Hotel/hotelservice.svc/rest/GetHotelResult/',
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
