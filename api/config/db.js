const mysql = require('mysql');

let dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_bilboards',
    multipleStatements: true
});
dbConnection.connect((err) => {
    if(err) throw err;
    console.log('Conneted!');
})
module.exports = dbConnection;