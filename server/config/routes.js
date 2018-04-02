/**
 * Created by dannyyassine on 2017-11-29.
 */

const todos = require('./state');
const auth = require('./middlewares/auth');

module.exports = app => {

    app.use('/api', auth);
    app.post('/api/login', (request, response) => {
        let date = new Date();
        response.cookie('dash_auth', date.toString(), { maxAge: 300000 });
        response.status(200).json({});
    });
    app.post('/api/logout', (request, response) => {
        response.cookie('dash_auth', null, { expires: new Date(0) });
        response.status(200).json({});
    });
    app.get('/api/todos', (request, response) => {
        response.status(200).json({data: todos});
    });

    /**
     * Front-end application
     */

    app.get('/*', (request, response) => {
        response.render('index.html');
    });

    app.use((request, response, err) => {
        response.render('404.html');
    });


};