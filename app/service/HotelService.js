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

    function guardar(nuevoHotel) {
        return HotelModel.create(nuevoHotel);
    }

    function buscarPorId(id) {
        return HotelModel.findById(id);
    }

    function borrar(id) {
        return HotelModel.destroy({
            where: {
                id: id
            }
        })
    }

    function actualizar(id, nuevoHotel) {
        return HotelModel.update(nuevoHotel, {
            where: {
                id: id
            }
        }).then(() => {
            return buscarPorId(id);
        })
    }

    return {
        buscarTodos: buscarTodos,
        guardar: guardar,
        buscarPorId: buscarPorId,
        borrar: borrar,
        actualizar: actualizar
    };

})();