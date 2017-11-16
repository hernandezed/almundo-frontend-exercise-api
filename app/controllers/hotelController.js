let hotelService = require('../service/HotelService');

module.exports = {
    buscarTodos: (req, res, next) => {
        hotelService.buscarTodos(req.query).then((hoteles) => {
            if (hoteles.length > 0) {
                res.send(hoteles);
            } else {
                res.status(404).send();
            }
        });
    },
    buscarPorId: (req, res, next) => {
        if (req.params.id) {
            hotelService.buscarPorId(req.params.id).then((hotel) => {
                if (hotel === null) {
                    res.status(404).send({});
                }
                res.send(hotel);
            }).catch((err) => {
            });
        } else {
            res.status(400).send();

        }
    },
}
