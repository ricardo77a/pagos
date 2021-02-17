
const mongoose = require('mongoose');
const { Schema } = mongoose;



const TareaSchema = new Schema({
    nombre:{
        type:String,
        required:true
    },
    fecha:{
    	type:Date,
    	default:Date.now()
    },
     descripcion:{
    	type:String,
    	required:true
    },
    user:{
    	type:Schema.ObjectId,
    	ref:"Users"
    },
    cantidad:{
    	type:Number,
    	required:true

    },
    activo:{
    	type:Boolean,
    	required:true,
    	default:true
    },
     confirms:[
        {
          
              type:Schema.ObjectId,
            ref:"UserConfirmTarea"  
        
            
        }
     ],


    
   
});



module.exports = mongoose.model('Tarea',TareaSchema);
