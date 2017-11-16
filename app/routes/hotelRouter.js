let express = require('express');
let router = express.Router();
let hotelController = require('../controllers/hotelController');

router.get('/', hotelController.buscarTodos);
router.get('/:id', hotelController.buscarPorId);
module.exports = router;
