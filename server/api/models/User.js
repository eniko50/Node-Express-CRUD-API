const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const User =  sequelize.define('user', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: Sequelize.STRING,
    phone_number: Sequelize.BIGINT,
});

User.sync();

module.exports = User;