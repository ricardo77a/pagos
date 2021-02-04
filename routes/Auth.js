const express = require('express');
const passport = require('passport');
const router = express.Router();
var AuthController = require('../controllers/AuthController');


router.get('/login-view', AuthController.loginView);
router.post('/login',passport.authenticate('local',{
    //si todo va bien redireccionamos a notas 
    successRedirect: '/tareas',
    //si hay algun error redireccionamos a signin
    failureRedirect: '/login-view',
    //para poder enviar mensajes
    failuerFlash:true
 
}));


router.get('/register-view', AuthController.registerView);
router.post('/register', AuthController.register);

module.exports = router;