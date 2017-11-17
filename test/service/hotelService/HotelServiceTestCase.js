const HotelService = require('../../../app/service/HotelService');
const HotelModel = require('../../../app/models').Hotel;
const assert = require('chai').assert;
module.exports = {

    buscarTodos_conCienHotelesEnLaBase_retornaListaDeHoteles(done) {
        HotelService.buscarTodos().then((hoteles) => {
            hoteles.length.should.be.eql(100);
            done();
        })
    },
    buscarTodos_conFiltrosPor3Estrellas_retorna58Hoteles(done) {
        var filtros = {estrellas: [3]}
        HotelService.buscarTodos(filtros).then((hoteles) => {
            hoteles.length.should.be.eql(58);
            done();
        })
    },
    buscarTodos_conFiltrosPor3Y4Estrellas_retorna83Hoteles(done) {
        var filtros = {estrellas: [3, 4]}
        HotelService.buscarTodos(filtros).then((hoteles) => {
            hoteles.length.should.be.eql(83);
            done();
        })
    },
    buscarTodos_conFiltrosPorNombre_retornaUnHotel(done) {
        var filtros = {nombre: "Hotel Santa Cruz"};
        HotelService.buscarTodos(filtros).then((hoteles) => {
            hoteles.length.should.be.eql(1);
            done();
        })
    },
    buscarTodos_conFiltrosPorParteDeNombre_retorna59Hoteles(done) {
        var filtros = {nombre: "Hotel"};
        HotelService.buscarTodos(filtros).then((hoteles) => {
            hoteles.length.should.be.eql(59);
            done();
        })
    },
    buscarTodos_conFiltrosPorNombreY3Estrellas_retornaUnHotel(done) {
        var filtros = {nombre: "Hotel Santa Cruz", estrellas: [3]};
        HotelService.buscarTodos(filtros).then((hoteles) => {
            hoteles.length.should.be.eql(1);
            done();
        })
    },
    guardar_conHotelValido_retornaHotelConId(done) {
        var nuevoHotel = {
            name: "Hotel Stefanos",
            stars: 5,
            price: 994.18,
            image: "4900059_30_b.jpg",
            amenities: [
                "safety-box",
                "nightclub",
                "deep-soaking-bathtub",
                "beach",
                "business-center"
            ]
        };

        HotelService.guardar(nuevoHotel).then((hotelGuardado) => {
            hotelGuardado.id.should.not.be.undefined;
            hotelGuardado.name.should.be.equal(nuevoHotel.name);
            done();
        })
    },
    guardar_conHotelSinNombre_lanzaError(done) {
        var nuevoHotel = {
            stars: 5,
            price: 994.18,
            image: "4900059_30_b.jpg",
            amenities: [
                "safety-box",
                "nightclub",
                "deep-soaking-bathtub",
                "beach",
                "business-center"
            ]
        }
        HotelService.guardar(nuevoHotel).catch((err) => {
            err.name.should.be.equal('SequelizeValidationError');
            done();
        });
    },
    guardar_conHotelConNombreVacio_lanzaError(done) {
        var nuevoHotel = {
            name: "",
            stars: 5,
            price: 994.18,
            image: "4900059_30_b.jpg",
            amenities: [
                "safety-box",
                "nightclub",
                "deep-soaking-bathtub",
                "beach",
                "business-center"
            ]
        };

        HotelService.guardar(nuevoHotel).catch((err) => {
            err.name.should.be.equal('SequelizeValidationError');
            done();
        });
    },
    guardar_conHotelConNombreSoloEspacios_lanzaError(done) {
        var nuevoHotel = {
            name: "        ",
            stars: 5,
            price: 994.18,
            image: "4900059_30_b.jpg",
            amenities: [
                "safety-box",
                "nightclub",
                "deep-soaking-bathtub",
                "beach",
                "business-center"
            ]
        };

        HotelService.guardar(nuevoHotel).catch((err) => {
            err.name.should.be.equal('SequelizeValidationError');
            done();
        });
    },
    buscarPorId_conIdValido_retornaHotel(done) {
        let id = 249942;
        hotelBuscado = "Hotel Stefanos";
        HotelService.buscarPorId(id).then((hotel) => {
            hotel.name.should.be.equal(hotelBuscado);
            done();
        });
    },
    buscarPorId_conIdInexistente_retornaObjetoVacio(done) {
        let id = 1249942;
        HotelService.buscarPorId(id).then((hotel) => {
            assert.isNull(hotel);
            done();
        })
    },
    buscarPorId_conIdNulo_retornaNull(done) {
        let id = null;
        HotelService.buscarPorId(id).then((hotel) => {
            assert.isNull(hotel);
            done();
        });
    },
    eliminar_conIdValido_borraHotel(done) {
        let id = 249942;
        HotelService.borrar(id).then((filasAfectadas) => {
            filasAfectadas.should.be.equal(1);
            done();
        });
    },
    eliminar_conIdNulo_lanzaError(done) {
        let id = null;
        HotelService.borrar(id).catch((err) => {
            err.descripcion.should.be.equal("El id a borrar no puede ser nulo");
            done();
        });
    },
    eliminar_conIdInvalido_lanzaError(done) {
        let id = 1249942;
        HotelService.borrar(id).catch((err) => {
            err.descripcion.should.be.equal("El id a borrar no existe");
            done();
        });
    },
    actualizar_conHotelYIdValido_retornaHotelActualizado(done) {
        let nuevoHotel = {
            name: "Hotel Stefanos",
            stars: 5,
            price: 994.18,
            image: "4900059_30_b.jpg",
            amenities: [
                "safety-box",
                "nightclub",
                "deep-soaking-bathtub",
                "beach",
                "business-center"
            ]
        };
        let hotelAntes = {
            "id": 161901,
            "name": "Hotel Santa Cruz",
            "stars": 3,
            "price": 1267.57,
            "image": "6623490_6_b.jpg",
            "amenities": [
                "nightclub",
                "business-center",
                "bathtub",
                "newspaper",
                "restaurant"
            ]
        }
        let id = 161901;
        HotelService.actualizar(id, nuevoHotel).then((hotelGuardado) => {
            nuevoHotel.id = id;
            hotelGuardado.name.should.not.be.equal(hotelAntes.name);
            hotelGuardado.image.should.not.be.equal(hotelAntes.image);
            hotelGuardado.price.should.not.be.equal(hotelAntes.price);
            hotelGuardado.stars.should.not.be.equal(hotelAntes.stars);
            hotelGuardado.amenities.should.not.be.equal(hotelAntes.amenities);
            done();
        })
    },
    actualizar_conIdInexistente_lanzaError(done) {
        let nuevoHotel = {
            name: "Hotel Stefanos",
            stars: 5,
            price: 994.18,
            image: "4900059_30_b.jpg",
            amenities: [
                "safety-box",
                "nightclub",
                "deep-soaking-bathtub",
                "beach",
                "business-center"
            ]
        };
        let id = 1619011;
        HotelService.actualizar(id, nuevoHotel).catch((err) => {
            err.codigo.should.be.equal(1);
            err.descripcion.should.be.equal("El id que intente actualizar no existe");
            done();
        })
    },
    actualizar_conNombreNull_lanzaError(done) {
        let nuevoHotel = {
            name: null,
            stars: 5,
            price: 994.18,
            image: "4900059_30_b.jpg",
            amenities: [
                "safety-box",
                "nightclub",
                "deep-soaking-bathtub",
                "beach",
                "business-center"
            ]
        };
        let id = 161901;
        HotelService.actualizar(id, nuevoHotel).catch((err) => {
            err.codigo.should.be.equal(2);
            err.descripcion.should.be.equal("Indique el nombre del hotel");
            done();
        });
    },
    actualizar_conHotelConNombreVacio_lanzaError(done) {
        let nuevoHotel = {
            name: "",
            stars: 5,
            price: 994.18,
            image: "4900059_30_b.jpg",
            amenities: [
                "safety-box",
                "nightclub",
                "deep-soaking-bathtub",
                "beach",
                "business-center"
            ]
        };
        let id = 161901;
        HotelService.actualizar(id, nuevoHotel).catch((err) => {
            err.codigo.should.be.equal(2);
            err.descripcion.should.be.equal("Indique el nombre del hotel")
            done();
        })
    },
    actualizar_conHotelConNombreSoloEspacios_lanzaError(done) {
        let nuevoHotel = {
            name: "     ",
            stars: 5,
            price: 994.18,
            image: "4900059_30_b.jpg",
            amenities: [
                "safety-box",
                "nightclub",
                "deep-soaking-bathtub",
                "beach",
                "business-center"
            ]
        };
        let id = 161901;
        HotelService.actualizar(id, nuevoHotel).catch((err) => {
            err.codigo.should.be.equal(2);
            err.descripcion.should.be.equal("Indique el nombre del hotel")
            done();
        });
    }
}