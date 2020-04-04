const express = require('express');
const router = express.Router();
const __ModelSmallNamecontroller = require('../controllers/__ModelSmallName_controller');
const __ModelSmallNamemiddleware = require('../middlewares/__ModelSmallName_middleware');

router.get('/', __ModelSmallNamecontroller.show__ModelName);
router.get('/:id', __ModelSmallNamecontroller.single__ModelName);
router.post('/add', __ModelSmallNamecontroller.add__ModelName);
router.patch('/update', __ModelSmallNamecontroller.update__ModelName);
router.delete('/remove/:id', __ModelSmallNamecontroller.delete__ModelName);

module.exports = router;