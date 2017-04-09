// API Key: AIzaSyBf8ZMDOePSdOUWLQ0bxi0ll3Vs37UcDNM
// Search Engine ID: 012894019053467490541:qb36mkgv7wu

// Search URI: https://www.googleapis.com/customsearch/v1?parameters

// Custom Search URI: https://www.googleapis.com/customsearch/v1?key=AIzaSyBf8ZMDOePSdOUWLQ0bxi0ll3Vs37UcDNM&cx=012894019053467490541:qb36mkgv7wu&q=cats

// Image parameter: searchType=image

// pagination: start=[The index of the first result to return]
// multiply by 10 for different pages


/* complete image URI (cat search): 
https://www.googleapis.com/customsearch/v1?key=AIzaSyBf8ZMDOePSdOUWLQ0bxi0ll3Vs37UcDNM&cx=012894019053467490541:qb36mkgv7wu&searchType=image&q=cats
*/

const API_KEY = 'AIzaSyBf8ZMDOePSdOUWLQ0bxi0ll3Vs37UcDNM';
const SEARCH_ENGINE_ID = '012894019053467490541:qb36mkgv7wu';

const express = require('express');
const app = express();
const axios = require('axios');
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
/*



*/

// function sendResults(data, res) {
//   res.set('Content-Type', 'text/html');
//   res.send(data);
// }

function saveSearchTerm(term) {
  const recentSearch = new RecentSearch({
    term: term,
    when: new Date().toUTCString()
  });

  recentSearch.save((err, record) => {
    console.log('Record saved: ', record);
  });

}

app.get('/', (req, res) => {
  res.send('Front end');
});

app.get('/api/imagesearch/:term', (req, res) => {
  // res.send(`term: ${req.params.term}, offset: ${req.query.offset}`);
  const term = req.params.term;
  const page = parseInt(req.query.offset) * 10;
  console.log(page);

  let url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&searchType=image&q=${term}`;

  // add pagination query if defined
  if (page) {
    url += `&start=${page}`;
  }

  axios(url)
    .then((response) => {
      const itemsArray = response.data.items.map(item => {
        return {
          url: item.link,
          title: item.title,
          context: item.image.contextLink,
          size: item.image.byteSize,
          thumbnail: item.image.thumbnailLink
        }
      })
      // send results
      res.set('Content-Type', 'text/html');
      res.send(itemsArray);

      // saves search term if search was successful
      saveSearchTerm(term);
    })
    .catch((err) => {
      // console.log(err.response.data)
      res.send(err.response.data);
    });
});

// define route to handle recent searches query
app.get('/api/latest/imagesearch/', (req, res) => {
  // pull list of last 10 searches from database

  RecentSearch.find({}).then((results) => {
    const resultsArray = results.reverse().slice(0, 10);

    mappedArray = resultsArray.map(item => 
      ({
        term: item.term,
        when: item.when
      })
    );
    res.set('Content-Type', 'text/html');
    res.send(mappedArray);
  });


});

app.listen(3000, () => {
  console.log('App is listening on port: ', port);
});