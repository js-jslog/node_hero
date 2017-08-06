"use strict"
const fs = require("fs");
const readfileCallback = function (err, content) {
    if (err) {
        return console.log(err);
    }
    console.log(content)
};
fs.readFile("file.md", "utf-8", readfileCallback);
