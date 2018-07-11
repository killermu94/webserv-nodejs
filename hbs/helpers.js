// Packages requires
const hbs = require('hbs')

// Helpers
hbs.registerHelper('getAnio', () => new Date().getFullYear());
hbs.registerHelper('capitalize', (value) => {
    let words = value.toString().split(' ');

    words.forEach((word, idx) => {
        words[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

    });

    return words.join(' ');
});