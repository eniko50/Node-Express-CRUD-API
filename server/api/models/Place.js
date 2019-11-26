const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Place = sequelize.define('place', {
    name: Sequelize.STRING,
    monthly_rent_price: Sequelize.INTEGER
});

//force: true will drop the table before creation if it alredy exist
Place.sync(() => {
    console.log('Table was created');
});
module.exports = Place;