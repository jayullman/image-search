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

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hey dude!');
});

app.listen(3000, () => {
  console.log('App is listening on port: ', port);
});