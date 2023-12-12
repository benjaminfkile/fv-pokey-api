"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_html_parser_1 = require("node-html-parser");
const reggie = require("./reggie");
const parser = (html) => {
    const root = (0, node_html_parser_1.parse)(html);
    const inmateEntries = root.querySelectorAll('.inmate-entry');
    const inmates = [];
    inmateEntries.forEach(entry => {
        const nameElement = entry.querySelector('.inmate-name h2');
        const name = nameElement ? nameElement.text.trim() : '';
        const ageElement = entry.querySelector('.inmate-info .inmate-stat h6:contains("Age") + p');
        const age = ageElement ? parseInt(ageElement.text.trim()) : undefined;
        const bailElement = entry.querySelector('.inmate-info .inmate-stat h6:contains("Total Bail") + p');
        const totalBail = bailElement ? bailElement.text.trim() : undefined;
        const courtDateElement = entry.querySelector('.inmate-info .inmate-stat h6:contains("Court Date") + p');
        const courtDate = courtDateElement ? courtDateElement.text.trim() : undefined;
        const mugshotDiv = entry.querySelector('.inmate-info .img_mug');
        const style = mugshotDiv ? mugshotDiv.getAttribute('style') : '';
        const mugshotUrl = `${process.env.JAIL_ROSTER_URL}/${reggie.getUrl(style)}`;
        const chargesElements = entry.querySelectorAll('.disposition-entry');
        const charges = chargesElements.map(chargeElement => {
            const statusElement = chargeElement.querySelector('.disposition');
            const status = statusElement ? statusElement.text.trim() : '';
            const descriptionElement = chargeElement.querySelector('.disposition-description');
            const description = descriptionElement ? descriptionElement.text.trim() : '';
            return { status, description };
        });
        inmates.push({ name, age, totalBail, courtDate, mugshotUrl, charges });
    });
    return inmates;
};
module.exports = parser;
