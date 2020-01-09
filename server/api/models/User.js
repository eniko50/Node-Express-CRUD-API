const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const User =  sequelize.define('user', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING
});

User.sync();

module.exports = User;