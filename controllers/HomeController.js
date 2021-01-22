function index(request, response) {
	response.render('index', {title: 'Página de Inicio'});
}

module.exports = {
    index
}