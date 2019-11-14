const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        const url = 'http://ektbilbordi.com/lokacije/';

        let bilboards = await evaluatePage(page, url);
        saveToJSON(bilboards);
        await browser.close();

    } catch (err) {
        console.log(err);
    }
})();

async function evaluatePage(page, url) {
    await page.goto(url);
    console.log(`Scraping: ${url}`);
    const dataset = [];

    //get the links
    const links = await page.evaluate(() => {
        const linksByPlace = [];
        const places = document.querySelectorAll('#recent-posts-3 > ul > li > a');
        for (let i = 0; i < places.length; i++) {
            linksByPlace.push(places[i]['href']);
        }
        return linksByPlace;
    });

    for (let i = 0; i < links.length; i++) {
        await page.setDefaultNavigationTimeout(0);
        await page.goto(links[i]);
        
        //scrape the data from the page
        const bilboardData = await page.evaluate(() => {
            
            const data = [];
            const codes = document.querySelectorAll('div.rpt_title.rpt_title');
            const surfaces = document.querySelectorAll('div.rpt_plan > div.rpt_features');

            for(let i = 0; i < codes.length; i++){
                data.push({
                    code : codes[i].innerText,
                    dimension: surfaces[i].children[1].innerText.split(' ')[1],
                    free : 'Da',
                    side: surfaces[i].children[3].innerText.split(' ')[1],
                    lighting : surfaces[i].children[2].innerText.split(' ')[1] || [],
                    location_description: surfaces[i].children[4].innerText.split(':')[1].trim(),
                });
            }
            return data;
        });
        dataset.push(bilboardData);
    }

    return dataset;
}

function saveToJSON(data){
    const jsonData = JSON.stringify(data, null, 2);
    const fs = require('fs');
    fs.writeFile('./bilboards.json', jsonData, err => {
        err ? console.log(err) : console.log('Data written');
    });
}