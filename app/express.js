"use strict";

const express = require("express");
const app = express();

app.use((request, response, next) => {
    console.log(request.headers);
    next();
});

app.use((request, response, next) => {
    request.chance = Math.random();
    next();
});

app.use((err, request, response, next) => {
    console.log(err);
    response.status(500).send("something broke");
});

app.get("/", (request, response) => {
    response.json({
        chance: request.chance,
    });
});

app.get("/error", (request, response) => {
    throw new Error("oops");
});

app.listen(3000);
