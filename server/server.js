'use strict';

// Load environment variables from the .env

require('dotenv').config();

// Declare application dependencies

const express = require('express');
const cors = require('cors');



// Application setup

const PORT = process.env.PORT;
const app = express();
app.use(cors());

// Ensure the server is listening for requests
// ***This must be at the end of the file***

app.listen((PORT, () => console.log(`Server up on port ${PORT}`) ));





