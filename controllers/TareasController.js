
const {response} = require('express');
const express = require('express')
const Tarea = require('../models/Tarea');
const User = require('../models/User');

const Confirm = require('../models/UserConfirmTarea');

async function  index(request, response) {

	
	const tareas = await Tarea.find({},function(err,tareas){
		
		User.populate(tareas, {path: "user"},function(err, confirmaciones){
			
			
			
			
		});

		Confirm.populate(tareas, {path: "confirms"},function(err, confirm){
				//response.send(confirm);
				
			});

		

		
		

		


		request.flash('msg_success','Hola');

		response.render('tareas/index', {tareas});
	}).sort({fecha:'desc'});

}

async function  create(request, response) {

	response.render('tareas/create',{

	});
}

async function  store(request, response) {
	const {nombre,cantidad,descripcion} = request.body;
	const tarea = await new Tarea({nombre,cantidad,descripcion});
	tarea.user = request.user.id;
	tarea.save();
	request.flash('msg_success','Se creo una tarea exitosamente');
	response.redirect("/tareas");
}

module.exports = {
	index,create,store
}

