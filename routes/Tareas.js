const { response } = require('express');
const express = require('express');


const router = express.Router();
const {isAuthenticated} = require('../app/middleware/auth');

var TareasController = require('../controllers/TareasController');

router.get('/tareas',isAuthenticated, TareasController.index);
router.get('/tareas/create',isAuthenticated, TareasController.create);
router.post('/tareas/store',isAuthenticated, TareasController.store);


module.exports = router;