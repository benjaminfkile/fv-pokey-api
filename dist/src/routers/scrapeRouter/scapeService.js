"use strict";
const Crawler = require('crawler');
const p = require("../../utils/parser");
const scrapeService = {
    scrape: () => {
        return new Promise((resolve, reject) => {
            const url = process.env.BASE_URL;
            let c = new Crawler({
                maxConnections: 10,
                callback: function (err, res, done) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        let $ = res.$;
                        let data = $("main").html();
                        resolve(p(data));
                    }
                    done();
                }
            });
            c.queue(url);
        });
    }
};
module.exports = scrapeService;
