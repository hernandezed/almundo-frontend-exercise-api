const HotelModel = require('../models').Hotel;

module.exports = (function () {


    function buscarTodos(filtros) {
        return HotelModel.findAll(armarFiltros(filtros || {}));
    }

    function armarFiltros(filtros) {
        var where = {};

        if (filtros.estrellas && filtros.estrellas.length !== 0) {
            where.stars = filtros.estrellas;
        }
        if (filtros.nombre) {
            where.name = {$like: "%" + filtros.nombre + "%"};
        }

        if (Object.keys(where).length !== 0) {
            return {where: where};
        } else {
            return {};
        }
    }

    return {
        buscarTodos: buscarTodos
    };

})();