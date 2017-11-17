var data = require('./data/data');
const fs = require('fs');
data.forEach(function (hotel) {
    hotel.amenities = hotel.amenities.toString();
    hotel.id = parseInt(hotel.id);
});

module.exports = {
    up: function (queryInterface, Sequelize) {
        fs.unlink("db.development.sqlite", function () {
            queryInterface.createTable('Hotels', {
                id: {type: Sequelize.INTEGER, primaryKey: true,
                    autoIncrement: true,
                    allowNull: false},
                name: Sequelize.STRING,
                image: Sequelize.STRING,
                stars: Sequelize.INTEGER,
                price: Sequelize.DOUBLE(6, 2),
                amenities: Sequelize.STRING
            });
            return queryInterface.bulkInsert('Hotels', data);
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface
                .dropTable('Hotels');
    }
}
