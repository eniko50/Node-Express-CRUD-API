const fs = require('fs');
const connection = require('../api/config/db');

fs.readFile('./places/placesArranged.json', (err, data) => {
    if (err) return console.log(err);

    const newData = JSON.parse(data);

    for (let elem of newData) {
        connection.query('INSERT INTO place SET ?', [elem], (err) => {
            if (err) return console.log(err);
        });
    }
    console.log('Data insert into place table');
});

fs.readFile('./bilboards/bilboardsArranged.json', (err, data) => {
    if (err) return console.log(err);

    const newData = JSON.parse(data);
    connection.connect();

    for (let elem of newData) {
        connection.query('INSERT INTO bilboard SET ?', [elem], (err) => {
            if (err) return console.log(err);
        });
    }
    console.log('Data inserted into bilboard table');
    connection.end();
});
