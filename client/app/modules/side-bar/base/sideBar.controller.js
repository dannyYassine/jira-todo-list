
SideBarController.$inject = ['dataHub'];
export default function SideBarController(dataHub) {
    let vm = this;

    vm.$onInit = $onInit;

    function $onInit() {
        vm.user = dataHub.getState().currentUser;
        vm.appName = dataHub.getState().app.name;
        vm.todosCount = dataHub.getState().todos.length;

        dataHub.suscribe(state => {
            vm.user = state.currentUser;
            vm.appName = state.app.name;
            vm.todosCount = state.todos.length;
        })
    }
};
