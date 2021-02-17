
const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserConfirmTareaSchema = new Schema({
	user:{
    	type:Schema.ObjectId,
    	ref:"Users"
    },
    tarea:{
    	type:Schema.ObjectId,
    	ref:"Tareas"
    },
    //Usuario que va ha pagar a quien hizo la tarea
    confirmacion_pago:{
    	type:Boolean,
    	
    },
    //Persona que confirma que ya le han pagado
    confirmacion_recibo:{
    	type:Boolean,
    	
    },
    fecha:{
    	type:Date,
    	default:Date.now()
    }
    
   
   


    
   
});



module.exports = mongoose.model('UserConfirmTarea',UserConfirmTareaSchema);
