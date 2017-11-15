let hotelModel = require('../service/HotelService');

module.exports = {
    obtenerTodos: (req, res, next) => {
        hotelModel.buscarTodos(req.query).then(function (hoteles) {
            if (hoteles.length > 0) {
                res.send(hoteles);
            } else {
                res.status(404).send();
            }
        });
    }
}
