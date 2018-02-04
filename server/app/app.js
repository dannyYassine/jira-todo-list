/**
 * Created by dannyyassine on 2017-11-29.
 */

const express       = require('express');
let app             = express();
let bodyParser      = require('body-parser');
let path            = require('path');
let nunjucks        = require('nunjucks');
/**
 * App Configuration
 */
app.use(express.static(path.join(__dirname, '../..', '/client/dist/public')));
app.use(express.static(path.join(__dirname, '../..', '/client/app/vendors')));

/**
 * Code Coverage
 */
app.use('/coverage', express.static(path.join(__dirname, '../..', '/coverage')));
app.use('/tests', express.static(path.join(__dirname, '../..', '/report')));

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

/**
 * Nunjucks for serving html containers
 */
nunjucks.configure(path.join(__dirname, '..', '/views'), {
    autoescape: true,
    express: app
});

module.exports = app;
