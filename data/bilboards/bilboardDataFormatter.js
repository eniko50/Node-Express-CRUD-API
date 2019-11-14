const fs = require('fs');

fs.readFile('bilboards.json', (err, data) => {
    if (err) return console.log(err);

    let dataArray = JSON.parse(data);
    let newData = [];
    for (let i = 0; i < dataArray.length; i++) {
        for (let elem of dataArray[i]) {
            elem.place_id = (i + 1);
            if(elem.lighting.length == 0){
                elem.lighting = 'Ne';
            };
            newData.push(elem);
        }
    }
    fs.writeFile('./bilboardsArranged.json', JSON.stringify(newData, null, 2), err => {
        err ? console.log(err) : console.log('Data written');
    });
});