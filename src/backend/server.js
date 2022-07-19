const path = require('path');
const express = require("express");
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 1337;

app.set('views', path.normalize(path.join(__dirname + '..\\public\\')));
app.use(express.static(path.normalize(path.join(__dirname + '..\\..\\public'))));


http.listen(port, () => {
  console.log(`server on: http://localhost:${port}/`);
});
