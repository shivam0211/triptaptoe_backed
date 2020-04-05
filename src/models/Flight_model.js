const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Flightschema = new Schema({
    Flightnumber: {
        type: String,
        required: true
    },
    Airline_code: {
        type: String,
        required: true
    },
    Airline_name: {
        type: String,
        required: true
    },
    departure_date: {
        type: Date,
    },
    arrival_date: {
        type: Date,
    },
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },


});

module.exports = mongoose.model('Flight', Flightschema);
