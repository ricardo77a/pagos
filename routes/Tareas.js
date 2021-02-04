const express = require('express');
const router = express.Router();
const {isAuthenticated} = require('../app/middleware/auth');

var TareasController = require('../controllers/TareasController');

router.get('/tareas',isAuthenticated, TareasController.index);

module.exports = router;