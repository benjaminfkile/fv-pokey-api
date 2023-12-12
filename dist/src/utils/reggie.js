"use strict";
const reggie = {
    getUrl: (input) => {
        const urlPattern = /url\(['"]?(.*?)['"]?\)/;
        const match = input.match(urlPattern);
        return match ? match[1] : null;
    }
};
module.exports = reggie;
