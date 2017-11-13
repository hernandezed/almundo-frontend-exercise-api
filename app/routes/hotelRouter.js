let express = require('express');
let router = express.Router();
let hotelController = require('../controllers/hotelController');

router.get('/', hotelController.obtenerTodos);
module.exports = router;
