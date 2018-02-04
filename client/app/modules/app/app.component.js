
let AppController = require('./app.controller');

module.exports = {
    template: require('./app.template.html'),
    controller: AppController,
    controllerAs: 'vm'
};