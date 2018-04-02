
module.exports = function (request, response, next) {

    if (request.originalUrl === '/api/login') {
        return next();
    } else if (!request.cookies.dash_auth) {
        response.status(401).json({error: 'Session expired. Please login to continue.'});
        return
    }

    let date = new Date();
    response.cookie('dash_auth', date.toString(), {maxAge: 300000});

    next();
};
