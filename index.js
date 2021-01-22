const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
app.set('puerto', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

const hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir : 'views/layouts',
    partialsDir: 'views/partials',
    extname:'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', '.hbs');


app.use(require('./routes/Index'));
app.use(require('./routes/Tareas'));

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