import SideBarService from "./sideBar.service";
import swal from 'sweetalert';
import UINotificationsService from "../../../shared/modules/notifications/notifications.service";

const SideBarComponent = {
    bindings: {
        onItemClicked: '&'
    },
    template: require('./sideBar.template.html'),
    controller: SideBarController,
    controllerAs: 'vm'
};
export default SideBarComponent;

SideBarController.$inject = ['dataHub', 'SideBarService', 'UINotificationsService'];
function SideBarController(dataHub, SideBarService, UINotificationsService) {
    let vm = this;

    vm.$onInit = $onInit;
    vm.onLogOut = onLogOut;
    
    function $onInit() {
        vm.user = dataHub.getState().user;
        vm.appName = dataHub.getState().app.name;
        vm.todosCount = dataHub.getState().todos.length;

        dataHub.suscribe({cb: function (state) {
                vm.appName = state.app.name;
            }});
        dataHub.suscribe({state: 'todos', cb: function (todos) {
                vm.todosCount = todos.length;
            }});
        dataHub.suscribe({state: 'user', cb: function (user) {
                vm.user = user;
            }});
    }
    
    function onLogOut() {
        swal({
            title: "Are you sure to logout?",
            text: "You will be redirected to the login screen.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    SideBarService.logOut(() => {
                        UINotificationsService.success('You have successfully logged out.');
                    });
                }
            });
    }
};