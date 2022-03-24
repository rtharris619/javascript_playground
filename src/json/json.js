var jsonata = require("jsonata");
const fs = require('fs');

const queryFile = () => {
    let rawdata = fs.readFileSync('../src/json/quotes.json');
    let quotes = JSON.parse(rawdata);

    var maxQuotes = jsonata("$max(id)").evaluate(quotes); 
    var quoteID = Math.floor(Math.random() * maxQuotes) + 1;

    var quote = jsonata(`$[id=${quoteID}]`).evaluate(quotes);
    console.log(quote);
};

module.exports.queryFile = queryFile;
