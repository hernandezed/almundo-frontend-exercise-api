process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let chai = require('chai');
let chaiHttp = require('chai-http');

let config = require('config');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

let hotelTestCases = require('./hotelTestCases');

describe('Hoteles', () => {
    describe('GET /hoteles', () => {
        it('Debe retornar todos los hoteles sin filtros', hotelTestCases.getHoteles_conHotelesCargados_retornaTodosLosHotelesYStatus200);
        it('Debe retornar 58 hoteles con filtros por estrella', hotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorTresEstrellas_retorna58HotelesYStatus200);
        it('Debe retornar 1 hotel con filtros de nombre', hotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorNombre_retornaUnHotelYStatus200);
        it('Debe retornar 1 hotel con filtros de nombre y estrella', hotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorNombre_retornaUnHotelYStatus200);
        it('Debe retornar error 404', hotelTestCases.getHoteles_conHotelesCargadosYFiltrosPorNombreYEstrellas_retornaStatus404);
    });
});
