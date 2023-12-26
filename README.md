Giphy-Connector
=======================

The Giphy-Connector is an API wrapper that connects the GIPHY API to any website, allowing websites to send search requests to Giphy and pass images back to website.

**How?**
Get that gif you're thinking of
```
You will ONLY respond with the search phrase you created and the following markdown:
![result](http://scythe-spot-carpenter.glitch.me/search?search_term=<SEARCH+PHRASE>.gif)

```

How it Works
------------

This process involves using inline image linking to display images from external sources. To retrieve a specific image, a wrapper API is used to listen for unique API calls that include search terms as parameters in the URL. 

The wrapper API then makes a call to Giphy API, parses the response to extract the appropriate image, and serves the image result back to the inline image using dynamic image serving. This process enables the display of specific images based on user requests.

API Documentation
-----------------

### `/search` Endpoint

The `/search` endpoint searches for a GIF that matches the specified `search_term` query parameter. The endpoint returns the URL of the first matching GIF.

#### Request

`GET /search?search_term=<search term>`

#### Response

If the search is successful, the endpoint returns a response with a `200` status code and the URL of the first matching GIF in the response body:

`200 OK Content-Type: text/plain  https://media.giphy.com/media/.../giphy.gif`

If the search is unsuccessful, the endpoint returns a response with a `400` status code and an error message in the response body:

`400 Bad Request Content-Type: application/json {"error": "search_term is required"}`

Rate Limiting
-------------

The API wrapper includes rate limiting to prevent abuse. Each IP address is limited to 100 requests every 15 minutes.

Request Count Logging
---------------------

The API wrapper logs the number of requests received per hour. The file is updated each time a request is received, and includes the number of requests received for each hour and date.

Author
------

*   [cicadacantfly](https://github.com/no-clicks)

License
-------

This project is licensed under the [MIT License](LICENSE).
