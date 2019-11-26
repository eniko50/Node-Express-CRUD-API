const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Bilboard = require('./Bilboard');
const User = require('./User');

const Rent = sequelize.define('rent', {
    user_id: Sequelize.INTEGER,
    bilboard_id: Sequelize.INTEGER,
    start_rent_date: Sequelize.DATE,
    end_rent_date: Sequelize.DATE
});
Rent.belongsTo(Bilboard, {foreignKey: 'bilboard_id', targetKey: 'id'});
Rent.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id'});
Rent.sync();

module.exports = Rent;