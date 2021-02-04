const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOveride = require('method-override');//Sobreescritura de metodos
const session =  require('express-session'); //Modulo para sessiones de usuario
const flash = require('connect-flash');
//Passport 
const passport = require('passport');

//Inicializaciones
const app = express();
require('./app/database/connection') //Conectamos la base de datos
require('./app/config/passport') 





app.set('puerto', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

const hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir : 'views/layouts',
    partialsDir: 'views/partials',
    extname:'hbs',
    runtimeOptions:{
      allowProtoPropertiesByDefault:true,
      allowProtoMethodsByDefault: true,

  }
 
  
});

app.engine('hbs', hbs.engine);
app.set('view engine', '.hbs');


//Midelware
app.use(express.urlencoded({extended:false}));
app.use(methodOveride('_method'));
app.use(session({
    secret:'mysecretapp',
    resave: true,
    saveUninitialized:true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req,res,next)=>{
  res.locals.user = req.user || null; //variable que contiene el ususario logeado
  console.log(req.user);
  next();

});

app.use(require('./routes/Index'));
app.use(require('./routes/Tareas'));
app.use(require('./routes/Auth'));




/*
app.use(function(req, res, next){
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
      res.render('404', { url: req.url });
      return;
    }

    // respond with json
    if (req.accepts('json')) {
      res.send({ error: 'Not found' });
      return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
});

*/
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('puerto'), function(){
    const puerto = app.get('puerto');
    console.log("Servidor corriendo en el puerto " + puerto);
});