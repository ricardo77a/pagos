

 async function  index(request, response) {
	response.render('tareas/index', {title: 'Página de Inicio'});
}

module.exports = {
    index
}