// const mysql = require('mysql');

// let dbConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'db_bilboards',
//     multipleStatements: true
// });
// dbConnection.connect((err) => {
//     if(err) throw err;
//     console.log('Conneted!');
// })

const Sequelize = require('sequelize');
const sequelize = new Sequelize('bilboards', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

//this tests the connection
let dbConnection = sequelize.authenticate()
    .then(() => {
        console.log('Connected!');
    })
    .catch( err => {
        console.console.error('Unable to connect to the database!', err);
    });

module.exports = sequelize;