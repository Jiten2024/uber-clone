const dotenv = require('dotenv'); //Environmental variable used
dotenv.config();  //Env var. Configured
const express = require('express'); //
const cors = require('cors'); //Set the cors
const app = express(); //Created a variable
const connectToDb =  require('./db/db');

connectToDb();

app.use(cors());  //Setup the cors   ,,, In production ntime Jo hame Domain milega Wsise request bkarna wske elabha Sari cheese ko karna block kardena.

//Created for teting purpose
app.get('/', (req , res) => {
    res.send('Hello world');
});

module.exports = app;