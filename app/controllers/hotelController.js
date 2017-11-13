let hotelModel = require('../models/hotelModel');

module.exports = {
    obtenerTodos: (req, res, next) => {
        hoteles = hotelModel.find(req.query);
        if (hoteles.length > 0) {
            res.send(hoteles);
        } else {
            res.status(404).send();
        }
    }
}
