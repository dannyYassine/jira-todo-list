
export default {
    bindings: {
        todo: '<'
    },
    template: require('./template.html'),
    controller: TodoDetailController,
    controllerAs: 'vm'
}

function TodoDetailController(todoService, BoardSelectedTodoService, UINotificationsService) {
    let vm = this;

    vm.$onInit = $onInit;
    vm.closeClick = closeClick;
    vm.deleteClick = deleteClick;

    function $onInit() {
    }
    function closeClick() {
        BoardSelectedTodoService.selectTodo(null);
    }
    function deleteClick() {
        todoService.remove(vm.todo).then(() => {
            UINotificationsService.success('The to-do was successfully removed.');
            BoardSelectedTodoService.selectTodo(null);
        })
    }
}