const express = require("express");
const path = require('path');
const indexPage = path.normalize(path.join(__dirname + '..\\public\\index.html'));

module.exports = app => {

    app.use(express.static(path.normalize(path.join(__dirname + '..\\..\\public'))));

    app.get('/', (req, res) =>{
        res.render(indexPage);
    });

}