/**
 * Created by dannyyassine on 2017-11-29.
 */

const todos = require('./state');
const auth = require('./middlewares/auth');

let todosData = null;

module.exports = app => {

    app.use('/api', auth);
    app.post('/api/login', (request, response) => {
        let email = request.body.email;
        let password = request.body.password;

        if (email !== 'test@gmail.com' || password !== 'swift') {
            return response.status(400).json({error: 'Invalid email or password'})
        }
        let date = new Date();
        response.cookie('dash_auth', date.toString(), { maxAge: 300000 });
        const data = {email: email};
        response.status(200).json({data: data});
    });
    app.post('/api/logout', (request, response) => {
        response.cookie('dash_auth', null, { expires: new Date(0) });
        response.status(200).json({});
    });
    app.get('/api/todos', (request, response) => {
        if (todosData) {
            return response.status(200).json({data: todosData});
        }
        todosData = todos;
        response.status(200).json({data: todos});
    });

    app.post('/api/todos', (request, response) => {
        todosData = request.body.todos;
        response.status(200).json({data: request.body.todos});
    });

    app.delete('/api/todos', (request, response) => {
        let todoData = request.body.todo;
        todosData.splice(todosData.indexOf(todoData),1);
        response.status(200).json({data: todosData});
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