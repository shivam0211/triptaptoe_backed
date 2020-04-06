const express = require('express');
const router = express.Router();
const Flightcontroller = require('../controllers/Flight_controller');
const Flightmiddleware = require('../middlewares/Flight_middleware');

router.use(Flightmiddleware.addcredentials);
router.post('/search',Flightcontroller.getflights);
router.post('/getfarerule',Flightcontroller.getfarerule);
router.post('/getfarequote',Flightcontroller.getfarequote);

module.exports = router;
