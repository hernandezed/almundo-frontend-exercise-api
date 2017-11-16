let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');

chai.use(chaiHttp);

module.exports = {

    getHoteles_conHotelesCargados_retornaTodosLosHotelesYStatus200: (done) => {
        chai.request(server)
                .get('/hoteles')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(100);
                    done();
                });

    },
    getHoteles_conHotelesCargadosYFiltrosPorTresEstrellas_retorna58HotelesYStatus200: (done) => {
        chai.request(server)
                .get('/hoteles?estrellas=3')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(58);
                    done();
                });

    },
    getHoteles_conHotelesCargadosYFiltrosPorNombre_retornaUnHotelYStatus200: (done) => {
        chai.request(server)
                .get('/hoteles?nombre=Hotel Santa Cruz')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                });

    },
    getHoteles_conHotelesCargadosYFiltrosPorNombre_retornaUnHotelYStatus200: (done) => {
        chai.request(server)
                .get('/hoteles?nombre=Hotel Santa Cruz&estrellas=3')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                });

    },
    getHoteles_conHotelesCargadosYFiltrosPorNombreYEstrellas_retornaStatus404: (done) => {
        chai.request(server)
                .get('/hoteles?nombre=Hotel Santa Cruz&estrellas=2')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
    },
    getHoteles_conHotelesCargadosYFiltrosPorVariasEstrellas_retorna83HotelesYStatus200: (done) => {
        chai.request(server)
                .get('/hoteles?estrellas=3&estrellas=4')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(83);
                    done();
                });
    },
    getHotel_conIdValido_retornaHotelYStatus200: (done) => {
        let id = 249942;
        hotelBuscado = "Hotel Stefanos";
        chai.request(server)
                .get('/hoteles/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.name.should.be.equal(hotelBuscado);
                    res.body.id.should.be.equal(id);
                    done();
                });
    },
    getHotel_conIdInexistente_retornaStatus404: (done) => {
        let id = 12499421;
        hotelBuscado = "Hotel Stefanos";
        chai.request(server)
                .get('/hoteles/' + id)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
    },
    getHotel_conIdNulo_retornaStatus400: (done) => {
        hotelBuscado = "Hotel Stefanos";
        chai.request(server)
                .get('/hoteles/null')
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
    }
}
