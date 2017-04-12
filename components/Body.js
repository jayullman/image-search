import React from 'react';

export default function App() {
  return (
    <div className="bodyContent">
      <p>
        This API microservice will return image search results using Google's custom search API. Recent searches
        are stored in a MongoDB database and can be queried.
      </p>
      <p> 
        Use the <code>/api/imagesearch/</code> endpoint to search for a term. Use the query <code>?offset=[0-9]</code>
        for different pages of results.
      </p>
      <p>
        Use the <code>/api/latest/imagesearch/</code> endpoint to query the MongoDB database for a list of the most recent searches.
      </p>
      <h3>Usage:</h3>
      <code>
        https://fccapi-imagesearch.herokuapp.com/api/imagesearch/dachshunds
      </code>
      <p>
        The server will return a JSON array of objects in the following format:
      </p>
      <code>
{
`{ 
  "url": "http://weinerdog.com/weinerdog.jpg",
  "title": "Hot Dog!",
  "context": "http://dogtime.com/dog-breeds/dachshund",
  "size": 237639,
  "thumbnail": "http://weinerdog.com/dogThumb.jpg"
}`
}
      </code><br/><br/>
      <code>
        https://fccapi-imagesearch.herokuapp.com/api/imagesearch/dachshunds
      </code>
      <p>
        Using the recent search endpoint will return a JSON array of objects in the following format:
      </p>
      <code>
{
`{
  "term": "corgis",
  "when": "Mon, 10 Apr 2017 04:23:57 GMT"
`}
}
      </code>
      <p>
        This project was built with Node.js, Express, MongoDB, and uses a React.js front end.
        To learn more about this project, please visit the <a href="https://github.com/libeja/image-search" target="_blank">
        Github{'\u00A0'}project{'\u00A0'}page</a>.
      </p>

    </div>
  );
}