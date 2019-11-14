const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        const url = 'http://ektbilbordi.com/lokacije/';

        await page.goto(url);

        const placeNames = await page.evaluate(() => {
            const placeNames = [];
            const places = document.querySelectorAll('#recent-posts-3 > ul > li > a');

            for (let i = 0; i < places.length; i++) {
                placeNames.push(places[i].innerText);
            }
            return placeNames;
        })

        saveToJSON(placeNames);
        await browser.close();
    } catch (err) {
        console.log(err);
    }
})();

function saveToJSON(data) {
    const fs = require('fs');
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('./places.json', jsonData, (err) => {
        err ? console.log(err) : console.log('Data written');
    })
}