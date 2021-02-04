const User = require('../models/User')

function loginView(request, response) {
    response.render('auth/login')
}

async function login(request, response) {
    console.log(request.body);
    response.send('ok');
}



 async function register(request, response) {
     const {name,email,password} = request.body;

    const user = new User( {name,email,password});
    user.password = await user.encryptPassword(request.body.password);
    await user.save();

    response.render('auth/register');

}


async function registerView(request, response) {
    response.render('auth/register');

}

module.exports = {
    loginView,register,registerView,login
}