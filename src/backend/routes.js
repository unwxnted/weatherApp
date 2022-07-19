const express = require("express");
const path = require('path');
const indexPage = path.normalize(path.join(__dirname + '..\\public\\index.html'));
const config = require('./config.js');
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': config.apiKey,
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
    }
};

module.exports = app => {

    app.use(express.static(path.normalize(path.join(__dirname + '..\\..\\public'))));

    app.get('/', (req, res) => {
        res.status(200).render(indexPage);
    });

    app.get('/weather', (req, res) => {

        const url = `https://community-open-weather-map.p.rapidapi.com/weather?q=${req.headers.city}&units=imperial&mode=JSON`;

        fetch(url, options)
            .then(res => res.json())
            .then(json => res.status(200).json(json))
            .catch(err => console.error('error:' + err));

    });

}