
import LoginController from './login.controller';

LoginController.$inject = ['LoginService'];
const Component = {
    template: require('./login.template.html'),
    controller: LoginController,
    controllerAs: 'vm'
};
export default Component;
