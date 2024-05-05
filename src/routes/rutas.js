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
    .get('/shopping',enlaceController.getShopping)
    .get('/sacamuelas',enlaceController.getSacamuelas)
    .get('/risk',enlaceController.getRisk)
    .get('/nemesis',enlaceController.getNemesis)
    .get('/monos_locos',enlaceController.getMonosLocos)
    .get('/prueba_o_verdad',enlaceController.getPruebaOVerdad)
    .get('/tragabolas',enlaceController.getTragaBolas)
    .get('/dragonkeeper',enlaceController.getDragonkeeper)
    .get('/dungeon',enlaceController.getDungeon)
    .get('/skyrim',enlaceController.getSkyrim)
    .get('/humedal',enlaceController.getHumedal)
    .get('/zygomatic',enlaceController.getZygomatic)
    .get('/jenga',enlaceController.getJenga)
    .get('/uno',enlaceController.getUno)



  

    
module.exports = router;
   


