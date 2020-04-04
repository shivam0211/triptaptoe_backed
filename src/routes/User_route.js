const express = require('express');
const router = express.Router();
const Usercontroller = require('../controllers/User_controller');
const Usermiddleware = require('../middlewares/User_middleware');

router.get('/', Usercontroller.showUser);
router.get('/:id', Usercontroller.singleUser);
router.post('/add', Usercontroller.addUser);
router.patch('/update', Usercontroller.updateUser);
router.delete('/remove/:id', Usercontroller.deleteUser);

module.exports = router;