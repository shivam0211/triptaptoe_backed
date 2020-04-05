const express = require('express');
const router = express.Router();
const Hotelcontroller = require('../controllers/Hotel_controller');
const Hotelmiddleware = require('../middlewares/Hotel_middleware');

router.use('/search',Hotelmiddleware.addcredentials);
router.post('/search',Hotelcontroller.gethotels);

module.exports = router;
