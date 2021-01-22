const express = require('express');
const router = express.Router();

router.get('/tareas/', function(request, response) {
	response.render('tareas/index', {title:'Tareas | Index'});
});

module.exports = router;