// Packages requires
const express = require('express');
const hbs = require('hbs');

// Hbs Helpers
require('./hbs/helpers');

// port of heroku
const port = process.env.PORT || 3000;

// Initialize express
const app = express();
app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        name: 'cradio'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'cradio'
    });
});

app.listen(port, () => console.log(`Listening the port ${ port }`));