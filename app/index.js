"use strict"
const calc = require("./calc");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter a number", (a1) => {
    rl.question("Enter another number", (a2) => {
        const result = calc.sum([a1, a2,]);
        console.log(`The result is: ${result}`);
    });
});
