
import SideBarController from './sideBar.controller';

SideBarController.$inject = ['$scope'];
const SideBarComponent = {
    template: require('./sideBar.template.html'),
    controller: SideBarController,
};
export default SideBarComponent;