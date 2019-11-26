const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Place = require('./Place');

const Bilboard = sequelize.define('bilboard',{
    code: Sequelize.STRING,
    dimension: Sequelize.ENUM('400x300','500x240', '500x210', '360x270', '260x150'),
    free: Sequelize.ENUM('Da', 'Ne'),
    side: Sequelize.ENUM('A', 'B', 'Desni', 'Levi', 'Gornji', 'Donji', 'Prvi', 'Drugi', 'Treci', 'Četvrti', 'Peti'),
    lighting: Sequelize.ENUM('Da', 'Ne', 'Prosvetljen', 'Cerada'),
    location_description: Sequelize.STRING,
    place_id: Sequelize.INTEGER
});

Bilboard.belongsTo(Place, {foreignKey: 'place_id', targetKey: 'id'});

Bilboard.sync(() => {
    console.log('Table was created!');
})

module.exports = Bilboard;