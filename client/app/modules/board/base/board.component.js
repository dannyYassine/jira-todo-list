
const BoardComponent = {
    template: require('./board.template.html'),
    controller: BoardController,
    controllerAs: 'vm'
};

BoardController.$inject = ['dataHub', 'todoService', 'BoardService', 'UINotificationsService', 'BoardSelectedTodoService'];
export function BoardController(dataHub, todoService, BoardService, UINotificationsService, BoardSelectedTodoService) {
    let vm = this;
    vm.$onInit = $onInit;
    vm.$onDestroy = $onDestroy;
    vm.onAdd = onAdd;

    function $onInit() {
        dataHub.suscribe({state: 'todos', cb: function (todos) {
            console.log(todos);
            vm.todos = todos;
        }});
        todoService.retrieve().then((todos) => {
            vm.todos = todos;
        });
        BoardSelectedTodoService.onSelectedTodo(_selectedTodoEvent)
    }

    function $onDestroy() {
        BoardSelectedTodoService.off(_selectedTodoEvent);
    }

    function onAdd(title) {
        todoService.create(title).then(() => {
            UINotificationsService.success('A new to-do sucessfully created!');
        });
    }

    function _selectedTodoEvent(todo) {
        vm.selectedTodo = todo;
    }

};

export default BoardComponent;