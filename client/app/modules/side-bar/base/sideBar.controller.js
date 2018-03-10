
SideBarController.$inject = ['dataHub'];
export default function SideBarController(dataHub) {
    let vm = this;

    vm.$onInit = $onInit;

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
};
