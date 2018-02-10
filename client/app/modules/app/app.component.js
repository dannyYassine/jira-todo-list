
import AppController from './app.controller';

AppController.$inject = ['$state', '$timeout'];
const AppComponent = {
    template: require('./app.template.html'),
    controller: AppController,
    controllerAs: 'vm'
};
export default AppComponent;