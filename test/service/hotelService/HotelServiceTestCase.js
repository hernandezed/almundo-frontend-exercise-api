const HotelService = require('../../../app/service/HotelService');

module.exports = {

    buscarTodos_conCienHotelesEnLaBase_retornaListaDeHoteles(done) {
        HotelService.buscarTodos().then(function (hoteles) {
            hoteles.length.should.be.eql(100);
            done();
        })
    },
    buscarTodos_conFiltrosPor3Estrellas_retorna58Hoteles(done) {
        var filtros = {estrellas: [3]}
        HotelService.buscarTodos(filtros).then(function (hoteles) {
            hoteles.length.should.be.eql(58);
            done();
        })
    },
    buscarTodos_conFiltrosPor3Y4Estrellas_retorna83Hoteles(done) {
        var filtros = {estrellas: [3, 4]}
        HotelService.buscarTodos(filtros).then(function (hoteles) {
            hoteles.length.should.be.eql(83);
            done();
        })
    },
    buscarTodos_conFiltrosPorNombre_retornaUnHotel(done) {
        var filtros = {nombre: "Hotel Santa Cruz"};
        HotelService.buscarTodos(filtros).then(function (hoteles) {
            hoteles.length.should.be.eql(1);
            done();
        })
    },
    buscarTodos_conFiltrosPorParteDeNombre_retorna59Hoteles(done) {
        var filtros = {nombre: "Hotel"};
        HotelService.buscarTodos(filtros).then(function (hoteles) {
            hoteles.length.should.be.eql(59);
            done();
        })
    },
    buscarTodos_conFiltrosPorNombreY3Estrellas_retornaUnHotel(done) {
        var filtros = {nombre: "Hotel Santa Cruz", estrellas: [3]};
        HotelService.buscarTodos(filtros).then(function (hoteles) {
            hoteles.length.should.be.eql(1);
            done();
        })
    }



}