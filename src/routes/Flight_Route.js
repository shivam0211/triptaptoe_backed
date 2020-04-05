const express = require('express');
const router = express.Router();
const Flightcontroller = require('../controllers/Flight_controller');
const Flightmiddleware = require('../middlewares/Flight_middleware');

router.use('/search',Flightmiddleware.addcredentials);
router.post('/search',Flightcontroller.getflights);

module.exports = router;
