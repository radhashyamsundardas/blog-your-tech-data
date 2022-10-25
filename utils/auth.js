const auth = (req, res, next) => {
    // authorizing if required session logged in or it will go to next page
    if (!req.session.loggedIn){
        res.redirect('/login')
    } else {
        next();
    }
};