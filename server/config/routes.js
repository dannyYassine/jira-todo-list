/**
 * Created by dannyyassine on 2017-11-29.
 */

const path = require('path');

module.exports = app => {

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