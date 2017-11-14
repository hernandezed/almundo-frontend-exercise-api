let hotelModel = require('../models').Hotel;

module.exports = {
    obtenerTodos: (req, res, next) => {

        hotelModel.findAll().then(function (hoteles) {
            if (hoteles.length > 0) {
                res.json(hoteles).send();
            } else {
                res.status(404).send();
            }
        });
    }
}
