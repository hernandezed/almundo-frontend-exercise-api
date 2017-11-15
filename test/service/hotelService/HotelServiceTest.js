process.env.NODE_ENV = 'test';

const chai = require('chai');

const HotelServiceTestCases = require('./HotelServiceTestCase');
const MockBaseDeDatos = require("../../mockBaseDeDatos");

describe('HotelService', () => {
    before(MockBaseDeDatos.preparar);

    describe('buscarTodos', () => {
        it('Debe retornar todos los hoteles sin filtros', HotelServiceTestCases.buscarTodos_conCienHotelesEnLaBase_retornaListaDeHoteles);
        it('Debe retornar 58 hoteles con filtro de 3 estrellas', HotelServiceTestCases.buscarTodos_conFiltrosPor3Estrellas_retorna58Hoteles);
        it('Debe retornar 83 hoteles con filtro de 3 y 4 estrellas', HotelServiceTestCases.buscarTodos_conFiltrosPor3Y4Estrellas_retorna83Hoteles);
        it('Debe retornar un hotel con filtro por nombre Hotel Santa Cruz', HotelServiceTestCases.buscarTodos_conFiltrosPorNombre_retornaUnHotel);
        it('Debe retornar 59 hoteles con filtro por nombre que contiene Hotel', HotelServiceTestCases.buscarTodos_conFiltrosPorParteDeNombre_retorna59Hoteles);
        it('Debe retornar 1 hoteles con filtro por nombre Hotel Santa Cruz y 3 estrellas', HotelServiceTestCases.buscarTodos_conFiltrosPorNombreY3Estrellas_retornaUnHotel);
    });
});
