const passport = require('passport'); //Validar uSUARIOS
const LocalStrategy = require('passport-local').Strategy;//cREAR SESIONES
const User = require('../../models/User');

//Donde regresamos la informacion de la auhentificacion 
passport.use(new LocalStrategy(
    {
        usernameField: 'email'
    },
    async function(email,password,done){
        const user = await User.findOne({email:email});
      
       

        //null indica que no hay ningun error
        //false indica que no se encontro el usuario en a DB
        if(!user){
            console.log('Usuario incorrecto');
            return done(null,false,{message:'No se encontro el usuario'});

        }else{
            const match = await user.matchPassword(password);
            if(match){
                //null indica que no hay ningun error
                //user indica que encontro un usuario con ese emaill

                return done(null,user);
            }else{
                //contrasena es incorrecta
                console.log('Contrasena Incorrecta');
                return done(null,false,{message:'Password Incorrecto'});
            }
        }
    }
));

//Crear una variable de sesion que contenga los datos del usuario validado 
passport.serializeUser(function(user,done){
    done(null,user.id);
});

//Funcion dado el id de l usuario retorne sus datos
//Obteniendolos de la DB
passport.deserializeUser(function(id,done){
  User.findById(id,function(error,usuario){
    done(error,usuario);
   });
   
               
});


