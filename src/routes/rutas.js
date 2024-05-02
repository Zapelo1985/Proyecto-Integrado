const express = require('express');
const router = express.Router();

const enlaceController = require('../controller/enlaceController');

router

    .get('/',enlaceController.getIndex)
    .get('/news',enlaceController.getNews)
    .get('/offers',enlaceController.getOffers)
    .get('/catalogue',enlaceController.getCatalogue)
    .get('/register',enlaceController.getRegister)
    .get('/contact',enlaceController.getContact)
    .get('/login',enlaceController.getLogin)
    .get('/register',enlaceController.getRegister)
    
module.exports = router;
   


