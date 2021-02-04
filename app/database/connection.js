const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pagosdb',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true

})
.then(db => console.log("Base de datos conectada"))
.catch(err=>console.log(err));