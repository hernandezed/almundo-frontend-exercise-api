const HotelService = require('../../../app/service/HotelService');

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
    }



}