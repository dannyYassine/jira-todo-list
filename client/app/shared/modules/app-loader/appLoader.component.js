
import AppLoaderController from './appLoader.controller';

AppLoaderController.$inject = ['AppLoaderService'];
const AppLoaderComponent = {
    template: require('./template.html'),
    controller: AppLoaderController,
    controllerAs: 'vm'
};
export default AppLoaderComponent;