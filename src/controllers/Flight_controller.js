const Flight = require('../models/Flight_model');

exports.getflights = (req,res,next) => {
      console.log(req.body);
      var data = JSON.stringify(req.body);
      var request = require('request');
      var options = {
          'method': 'POST',
          'url': 'http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search/',
          'headers': {
              'Content-Type': 'application/json'
      },
      body: data,
      };
      request(options, function (error, response) {
          if (error) res.send(error);
              res.send(response.body);
              //console.log(response.body);

      });

};
