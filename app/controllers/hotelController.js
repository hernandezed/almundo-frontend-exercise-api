let hotelService = require('../service/HotelService');

module.exports = {
    obtenerTodos: (req, res, next) => {
        hotelService.buscarTodos(req.query).then(function (hoteles) {
            if (hoteles.length > 0) {
                res.send(hoteles);
            } else {
                res.status(404).send();
            }
        });
    }
}
