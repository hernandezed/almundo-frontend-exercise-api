module.exports = function (sequelize, DataTypes) {
    var Hotel = sequelize.define("Hotel", {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        stars: DataTypes.INTEGER,
        price: DataTypes.DOUBLE(6, 2),
        amenities: {type: DataTypes.STRING,
            get: function () {
                return this.getDataValue('amenities').split(',')
            },
            set: function (amenities) {
                this.setDataValue('amenities', amenities.join(','));
            }}
    }, {
        timestamps: false
    });
    return Hotel;
};
