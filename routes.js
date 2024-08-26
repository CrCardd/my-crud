const express = require('express');
const route = express.Router();

const home = require('./src/controller/home');
route.get('/', home.getHome);


const create = require('./src/controller/create_account');
route.get('/createAccount', create.getData);
route.post('/createAccount', create.insertUser);

const login = require('./src/controller/login');
route.post('/login', login.login);
route.get('/reload', (res, req) => {
    
});

const edit = require('./src/controller/edit');
route.post('/delete_user/:id', edit.delete_user);



module.exports = route;