function index(request, response) {
	request.flash('msg_success','Hola');
	response.render('index', {title: 'Página de Inicio'});
}

module.exports = {
    index
}