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
    before(MockBaseDeDatos.preparar);

    describe('GET /hoteles', () => {
        it('Debe retornar todos los hoteles sin filtros', HotelTestCases.getHoteles_conHotelesCargados_retornaTodosLosHotelesYStatus200);
        it('Debe retornar 58 hoteles con filtros por estrella', HotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorTresEstrellas_retorna58HotelesYStatus200);
        it('Debe retornar 83 hoteles con filtros por varias estrellas', HotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorVariasEstrellas_retorna83HotelesYStatus200);
        it('Debe retornar 1 hotel con filtros de nombre', HotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorNombre_retornaUnHotelYStatus200);
        it('Debe retornar 1 hotel con filtros de nombre y estrella', HotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorNombre_retornaUnHotelYStatus200);
        it('Debe retornar error 404', HotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorNombreYEstrellas_retornaStatus404);
    });
});
