//import package
const express = require("express");
const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
const bodyParser = require('body-parser');
require('dotenv/config');


//execute package as a function in app
const app = express();
app.use(bodyParser.json());

//middleware

//Routes
app.get('/', (req,res) =>{
    res.send('<h1>We are on home</h1>');
});

//import routes
const postsRoute = require('./routes/posts'); //imports the posts file

//
app.use('/posts', postsRoute); //this middleware funtion runs the posts function

//connect to db
mongoose.connect(
process.env.DB_CONNECTION, 
() => console.log('connected to db')
);

//listening to the server
app.listen(4000)