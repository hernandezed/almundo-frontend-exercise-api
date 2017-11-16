process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const config = require('config');
const server = require('../../server');
const should = chai.should();

chai.use(chaiHttp);

const HotelTestCases = require('./hotelTestCases');
const MockBaseDeDatos = require("../mockBaseDeDatos");

describe('Hoteles', () => {

    describe('GET /hoteles', () => {
        before(MockBaseDeDatos.preparar);
        it('Debe retornar todos los hoteles sin filtros, status=200', HotelTestCases.getHoteles_conHotelesCargados_retornaTodosLosHotelesYStatus200);
        it('Debe retornar 58 hoteles con filtros por estrella, status=200', HotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorTresEstrellas_retorna58HotelesYStatus200);
        it('Debe retornar 83 hoteles con filtros por varias estrellas, status=200', HotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorVariasEstrellas_retorna83HotelesYStatus200);
        it('Debe retornar 1 hotel con filtros de nombre, status=200', HotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorNombre_retornaUnHotelYStatus200);
        it('Debe retornar 1 hotel con filtros de nombre y estrella, status=200', HotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorNombre_retornaUnHotelYStatus200);
        it('Debe retornar 0 hoteles con combinacion de filtros inexistente, status=404', HotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorNombreYEstrellas_retornaStatus404);
    });

    describe('GET /hoteles/:id', () => {
        before(MockBaseDeDatos.preparar);
        it('Debe retornar un hotel con id: 249942, status=200', HotelTestCases.getHotel_conIdValido_retornaHotelYStatus200);
        it('Debe retornar un hotel vacio con id: 2499421, status=404', HotelTestCases.getHotel_conIdInexistente_retornaStatus404);
    });

    describe('POST /hoteles', () => {
        before(MockBaseDeDatos.preparar);
        it('Debe retornar hotel guardado con hotel valido, status=201', HotelTestCases.postHotel_conHotelValido_retornaNuevoHotelYStatus201);
        it('Debe no retornar hotel con hotel invalido, status=400', HotelTestCases.postHotel_conHotelInvalido_retornaStatus400);
    });

    describe('DELETE /hoteles', () => {
        before(MockBaseDeDatos.preparar);
        it('Debe retornar status=204', HotelTestCases.deleteHotel_conIdValido_retornaStatus204);
        it('Debe no retornar status=404', HotelTestCases.deleteHotel_conIdInvalido_retornaStatus404);
    });
});
