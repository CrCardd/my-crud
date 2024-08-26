const routes = require('./routes');     //Import routes defined
const express = require('express');     //Using express from node.js

const app = express();                  //Instanting express into 'app' for configuration

app.use(express.urlencoded({ extended: true }));    //Setting manipulated objects for complex level (if false only strings and arrays will be able)

app.use(express.static('public'));      //Setting that the 'public' folder is the main one

app.set('views', './src/view');         //Set where my views is
app.set('view engine', 'ejs')           //Set the views type archive

app.use(routes);                        //Using the configurated routes

app.listen(5000, () => console.log('access in http://localhost:5000/'))     //Set that this will "listen" the req in the 5000 port