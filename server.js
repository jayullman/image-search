// API Key: AIzaSyBf8ZMDOePSdOUWLQ0bxi0ll3Vs37UcDNM
// Search Engine ID: 012894019053467490541:qb36mkgv7wu

// Search URI: https://www.googleapis.com/customsearch/v1?parameters

// Custom Search URI: https://www.googleapis.com/customsearch/v1?key=AIzaSyBf8ZMDOePSdOUWLQ0bxi0ll3Vs37UcDNM&cx=012894019053467490541:qb36mkgv7wu&q=cats

// Image parameter: searchType=image


/* complete image URI (cat search): 
https://www.googleapis.com/customsearch/v1?key=AIzaSyBf8ZMDOePSdOUWLQ0bxi0ll3Vs37UcDNM&cx=012894019053467490541:qb36mkgv7wu&searchType=image&q=cats
*/

const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const mongoUrl = process.env.MONGOLAB_URI;
const options = process.env.MONGOLAB_URI
  ? {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
  }
  : {};

mongoose.connect(mongoUrl, options);

mongoose.connection.once('open', console.log.bind(console, 'Successfully connected to database'))
mongoose.connection.on('error', console.error.bind(console, 'connection error: '));


const port = process.env.PORT || 3000

const recentSearchSchema = mongoose.Schema({
  term: String,
  when: String
});

const RecentSearch = mongoose.model('recentSearch', recentSearchSchema);

// create new recent search
// !!! Test Data !!!
const recentSearch = new RecentSearch({
  term: 'lulz',
  when: new Date().toUTCString()
});

recentSearch.save((err, record) => {
  console.log('Record saved: ', record);
})

console.log(recentSearch);

app.get('/', (req, res) => {
  res.send('Hey dude!');
});

app.listen(3000, () => {
  console.log('App is listening on port: ', port);
});