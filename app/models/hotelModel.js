var hoteles = require('../data/data');
var _ = require("underscore");

module.exports = {
    find: (filtros) => {
        return _.where(hoteles, filtros);
    }
}

