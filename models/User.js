const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    }
});

//Metodo para encriptar la contrasena
UserSchema.methods.encryptPassword = async function (password){
    //Aplicar un hash 10 veces
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password,salt);
    return hash;
}
//Metodo para comparar la contrasena
UserSchema.methods.matchPassword = async function (password){
    return await bcrypt.compare(password,this.password);
}

module.exports = mongoose.model('User',UserSchema);
