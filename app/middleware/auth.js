const helpers = {};
helpers.isAuthenticated = function(req,res,next){
    if (req.isAuthenticated()) {
        return next();
    }else{
        
        res.redirect('/login-view');

    }

}
module.exports = helpers;