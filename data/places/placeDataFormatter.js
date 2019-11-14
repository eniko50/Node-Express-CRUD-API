const fs = require('fs');

fs.readFile('places.json', (err, data) => {
    if (err) return console.log(err);
    let dataArray = JSON.parse(data);
    let newData = []
    for (let elem of dataArray) {
        let place = {name: elem};
        if (elem == "NOVI SAD" || elem == "KRAGUJEVAC" || elem == "ČAČAK") {
            place.monthly_rent_price = 480;
        } else {
        place.monthly_rent_price = 320;
        }
        newData.push(place);
    }
    fs.writeFile('./placesArranged.json', JSON.stringify(newData, null, 2), (err) => {
        err ? console.log(err) : console.log('Data written');
    })
});