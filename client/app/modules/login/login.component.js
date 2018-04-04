
import LoginController from './login.controller';

LoginController.$inject = ['LoginService', 'UINotificationsService'];
const Component = {
    template: require('./login.template.html'),
    controller: LoginController,
    controllerAs: 'vm'
};
export default Component;
