const express = require('express');
const router = express.Router();

const enlaceController = require('../controller/enlaceController');

router

    .get('/',enlaceController.getIndex)
    .get('/news',enlaceController.getNews)
    .get('/offers',enlaceController.getOffers)
    .get('/catalogo',enlaceController.getCatalogo)
    .get('/register',enlaceController.getRegister)
    .get('/preorders',enlaceController.getPreorders)
    .get('/contact',enlaceController.getContact)
    .get('/login',enlaceController.getLogin)
    .get('/register',enlaceController.getRegister)
    
module.exports = router;
   


