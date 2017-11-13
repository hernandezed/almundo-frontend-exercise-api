let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');

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
                .get('/hoteles')
                .query({stars: 3})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(58);
                    done();
                });

    },
    getHoteles_conHotelesCargadosYFiltrosPorNombre_retornaUnHotelYStatus200: (done) => {
        chai.request(server)
                .get('/hoteles')
                .query({name: "Hotel Santa Cruz"})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                });

    },
    getHoteles_conHotelesCargadosYFiltrosPorNombre_retornaUnHotelYStatus200: (done) => {
        chai.request(server)
                .get('/hoteles')
                .query({name: "Hotel Santa Cruz", stars: 3})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                });

    },
    getHoteles_conHotelesCargadosYFiltrosPorNombreYEstrellas_retornaStatus404: (done) => {
        chai.request(server)
                .get('/hoteles')
                .query({name: "Hotel Santa Cruz", stars: 2})
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });

    }
}
//  getProductos_ConProductosEnLaBD_retornaListaConUnProductoYStatus200: (done) => {
//    chai.request(server)
//      .get('/productos')
//      .end((err, res) => {
//      res.should.have.status(200);
//      res.body.should.be.a('array');
//      res.body.length.should.be.eql(1);
//      done();
//    })
//  },
//  postProductos_conProductoValido_retornaProductoYStatus201: (done) => {
//      let product = {
//        nombre: 'Naranja',
//        cantidad: 10
//      }
//      chai.request(server)
//        .post('/productos')
//        .send(product)
//        .end((err, res) => {
//            res.should.have.status(201);
//            res.body.should.be.a('object');
//            res.body.should.to.include(product);
//          done();
//        });
//  },
//  postProductos_conBodyVacio_retornaStatus400: (done) => {
//    chai.request(server)
//        .post('/productos')
//        .send()
//        .end((err, res) => {
//            res.should.have.status(400);
//          done();
//        });
//  },
//
//  postProductos_conProductoExistente_retornaStatus409: (done) => {
//    let product = {
//      nombre:"Manzana",
//      cantidad:10
//    }
//    chai.request(server)
//      .post('/productos')
//      .send(product)
//      .end((err, res) => {
//        res.should.have.status(409);
//        done();
//      });
//    },
//  postProductos_sinCantidad_retornaProductoConCantidadCeroYStatus201 : (done) => {
//      let product = {
//        nombre:"Naranja"
//      }
//      chai.request(server)
//        .post('/productos')
//        .send(product)
//        .end((err, res) => {
//          res.should.have.status(201);
//          res.body.should.be.a('object');
//          res.body.should.to.include(product);
//          res.body.cantidad.should.to.be.eql(0);
//          done();
//        });
//    },
//    patchProductos_conIdValidoYCantidadPositiva_retornaProductoYStatus200: (done) => {
//          ProductModel.find({nombre:'Manzana'}, function(err,Manzana) {
//            chai.request(server)
//            .patch('/productos/'+ Manzana[0].id.toString())
//            .send({cantidad: 10})
//            .end((err, res) => {
//              res.should.have.status(200);
//              res.body.should.be.a('object');
//              res.body.cantidad.should.to.be.eql(20);
//              done();
//            });
//          });
//
//    },
//    patchProductos_conIdInvalido_retornaStatus404: (done) => {
//            chai.request(server)
//            .patch('/productos/'+ mongoose.Types.ObjectId().toString())
//            .send({cantidad: 10})
//            .end((err, res) => {
//              res.should.have.status(404);
//              done();
//            });
//    },
//    patchProductos_conIdValidoYCantidadNegativaValida_retornaProductoYStatus200: (done) => {
//          ProductModel.find({nombre:'Manzana'}, function(err,Manzana) {
//            chai.request(server)
//            .patch('/productos/'+ Manzana[0].id.toString())
//            .send({cantidad: -10})
//            .end((err, res) => {
//              res.should.have.status(200);
//              res.body.should.be.a('object');
//              res.body.cantidad.should.to.be.eql(0);
//              done();
//            });
//          });
//
//    },
//    patchProductos_conIdValidoYCantidadNegativaInvalida_retornaStatus409: (done) => {
//          ProductModel.find({nombre:'Manzana'}, function(err,Manzana) {
//            chai.request(server)
//            .patch('/productos/'+ Manzana[0].id.toString())
//            .send({cantidad: -100})
//            .end((err, res) => {
//              res.should.have.status(409);
//              done();
//            });
//          });
//
//    }

