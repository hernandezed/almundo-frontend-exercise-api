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
        }).then((cantidadBorrados) => {
            if (!id) {
                throw {
                    descripcion: "El id a borrar no puede ser nulo"
                }
            } else if (!cantidadBorrados) {
                throw {
                    descripcion: "El id a borrar no existe"
                }
            } else {
                return new Promise((resolve, reject) => {
                    resolve(cantidadBorrados);
                })
            }
        })
    }

    function actualizar(id, nuevoHotel) {
        return HotelModel.update(nuevoHotel, {
            where: {
                id: id
            }
        }).catch((err) => {
            throw {
                descripcion: "Indique el nombre del hotel"
            }
        }).then((hotelActualizado) => {
            if (hotelActualizado[0] !== 0) {
                return buscarPorId(id);
            } else {
                throw {
                    descripcion: "El id que intente actualizar no existe"
                }
            }
        });
    }

    return {
        buscarTodos: buscarTodos,
        guardar: guardar,
        buscarPorId: buscarPorId,
        borrar: borrar,
        actualizar: actualizar
    };

})();