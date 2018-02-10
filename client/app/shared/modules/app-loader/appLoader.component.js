
import AppLoaderController from './appLoader.controller';

AppLoaderController.$inject = ['AppService'];
const AppLoaderComponent = {
    template: require('./template.html'),
    controller: AppLoaderController,
    controllerAs: 'vm'
};
export default AppLoaderComponent;