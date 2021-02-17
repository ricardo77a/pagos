
const Confirm = require('../models/UserConfirmTarea')
const Tarea = require('../models/Tarea')
const User = require('../models/User')

async function confirm_pago(request,response){
	
	//Guardar en el modelo de confirmaciones 
	const confirm = await  new Confirm();
	confirm.user = request.user._id;
	confirm.tarea = request.params.id; 
	confirm.confirmacion_pago = true;
	confirm.confirmacion_recibo = false 
	confirm.save();
	console.log(confirm._id);

	//Asignar la confirmacion al objeto tarea seleccionado
	//const conf = await Confirm.findById(confirm._id);
	const tarea = await Tarea.findById(request.params.id);
	tarea.confirms.push(confirm._id);
	tarea.save();
	

	response.redirect("/tareas");
}

async function confirms(request,response) {
	
	const tarea = await Tarea.findById(request.params.id);
	const confirms = await Confirm.find({tarea:tarea._id},function(err,confirms){
		User.populate(confirms, {path: "user"},function(err, users){
			//response.send(users);
			response.render("confirms/index",{tarea,confirms});
			
		});
	});

	
}

async function confirm_recibo(request,response) {
	const confirm = await Confirm.findById(request.params.id);
	confirm.confirmacion_recibo = true;
	confirm.save();

	//response.send(confirm);
	response.redirect("/confirms/"+confirm.tarea)

	
}

module.exports = {
	confirm_pago,confirms,confirm_recibo
}