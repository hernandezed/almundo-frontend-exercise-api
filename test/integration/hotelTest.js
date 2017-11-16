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
        it('Debe retornar todos los hoteles sin filtros', HotelTestCases.getHoteles_conHotelesCargados_retornaTodosLosHotelesYStatus200);
        it('Debe retornar 58 hoteles con filtros por estrella', HotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorTresEstrellas_retorna58HotelesYStatus200);
        it('Debe retornar 83 hoteles con filtros por varias estrellas', HotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorVariasEstrellas_retorna83HotelesYStatus200);
        it('Debe retornar 1 hotel con filtros de nombre', HotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorNombre_retornaUnHotelYStatus200);
        it('Debe retornar 1 hotel con filtros de nombre y estrella', HotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorNombre_retornaUnHotelYStatus200);
        it('Debe retornar error 404', HotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorNombreYEstrellas_retornaStatus404);
    });

    describe('GET /hoteles/:id', () => {
        before(MockBaseDeDatos.preparar);
        it('Debe retornar un hotel con id: 249942', HotelTestCases.getHotel_conIdValido_retornaHotelYStatus200);
        it('Debe retornar un hotel vacio con id: 2499421', HotelTestCases.getHotel_conIdInexistente_retornaStatus404);
        it('Debe lanzar error con id nulo', HotelTestCases.getHotel_conIdNulo_retornaStatus400);
    });
});
