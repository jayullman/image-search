# image-search

Live site: https://fccapi-imagesearch.herokuapp.com/

This API microservice will shorten a valid URL. The shortened URLs are stored in a MongoDB database. 

Use the /api/imagesearch/ endpoint to search for a term. Use the query ?offset=[0-9]for different pages of results.

Use the /api/latest/imagesearch/ endpoint to query the MongoDB database for a list of the most recent searches.

## User stories
1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
3. I can get a list of the most recently submitted search strings.