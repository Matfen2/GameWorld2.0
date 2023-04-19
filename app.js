const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express ();

const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/gameWorld.html'))
});

app.listen(port, () => {
    console.log('My site is reside on port server ' + port)
});