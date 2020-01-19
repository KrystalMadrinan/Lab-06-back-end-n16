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
  response.send('home page!!!!');
});

// app.get('/about', aboutUsHandler);

// function aboutUsHandler(request, response) {
//   response.status(200).send('About us page');
// }


// route for location/map
app.get('/location', (request, response) => {
  try {
    console.log(request.query);
    //Getting info for object
    const geoData = require('./geo.json');
    console.log(geoData);
    const city = request.query.city;
    const locationData = new Location(city, geoData);
    console.log('location data:', locationData);
    response.send(locationData);
    return locationData;
  } catch (error) {
    errorHandler('it went wrong.', request, response);

  }

});
//routes above function below

//creating object
function Location(city, geoData) {
  console.log('locationbuildobj');
  this.search_query = city;
  this.formatted_query = geoData[0].display_name;
  this.latitude = geoData[0].lat;
  this.longitude = geoData[0].lon;
}

//Rout for weather 

app.get('/weather', (request, response) => {
  try {
      const weatherData = require('./darksky.json');
      const weather = request.query.time;
      const forecast = new Weather(time, weatherData);
      response.send(weatherData);
      return weatherData;
  } catch (error) {
    errorHandler('something went wrong', request, response);
  }
})

//object for weather 

function Weather(time, weatherData) {
  this.search_query = time;
  this.formatted_query = weatherData[0].summary;
}



function errorHandler(error, request, response) {
  response.status(500).send(error);
}

// Ensure the server is listening for requests
// ***This must be at the end of the file***

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));





