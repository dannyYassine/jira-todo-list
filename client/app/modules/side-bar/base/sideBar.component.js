
import SideBarController from './sideBar.controller';

const SideBarComponent = {
    bindings: {
        onItemClicked: '&'
    },
    template: require('./sideBar.template.html'),
    controller: SideBarController,
    controllerAs: 'vm'
};
export default SideBarComponent;