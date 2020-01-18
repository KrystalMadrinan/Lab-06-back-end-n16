'use strict';

// Load environment variables from the .env
require('dotenv').config();

// Declare application dependencies
const express = require('express');
const cors = require('cors');

// Application setup
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// route syntax = app.<operation>('route', callback);
app.get('/', (request, response) => {
  response.send('home page!');
});

app.get('/about', aboutUsHandler);

function aboutUsHandler(request, response) {
  response.status(200).send('About us page');
}


// lab route stuff
app.get('/location', (request, response) => {
  try {
    //Getting info for object
    const geoData = require('./data/geo.json');
    const city = request.query.city;
    const locationData = new Location(city, geoData);
    response.send(locationData);
  } catch (error) {
    //error function
  }

});
//routes above function below

//creating object
function Location(city, geoData) {
  this.search_query = city;
  this.formatted_query = geoData[0].display_name;
  this.latitude = geoData[0].lat;
  this.longitute = geoData.results[0].lon;
}


// Ensure the server is listening for requests
// ***This must be at the end of the file***

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));





