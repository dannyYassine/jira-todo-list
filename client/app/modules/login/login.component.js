
import LoginController from './login.controller';

LoginController.$inject = ['$state'];
const Component = {
    template: require('./login.template.html'),
    controller: LoginController,
    controllerAs: 'vm'
};
export default Component;
