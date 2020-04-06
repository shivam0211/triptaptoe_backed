const express = require('express');
const router = express.Router();
const Hotelcontroller = require('../controllers/Hotel_controller');
const Hotelmiddleware = require('../middlewares/Hotel_middleware');

router.use(Hotelmiddleware.addcredentials);
router.post('/search',Hotelcontroller.gethotels);
router.post('/hotelinfo',Hotelcontroller.gethotelinfo);
router.post('/hotelroom'.Hotelcontroller.gethotelroom);

module.exports = router;
