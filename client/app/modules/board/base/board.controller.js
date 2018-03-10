
export default function BoardController(dataHub, todoService) {
    let vm = this;
    vm.click = function () {
        todoService.create('habibi')
    };
    vm.$onInit = $onInit;
    vm.onAdd = onAdd;
    vm.draggingTodo = null;

    function $onInit() {
        vm.todos = [[] , [], [] , []];

        sortTodos(dataHub.getState().todos);
        dataHub.suscribe({state: 'todos', cb: function (todos) {
            sortTodos(todos);
        }});
    }

    function sortTodos(todos) {
        vm.todos[0] = todos.filter(function (todo) {
            return todo.status === 'todo'
        });
        vm.todos[1] = todos.filter(function (todo) {
            return todo.status === 'progress'
        });
        vm.todos[2] = todos.filter(function (todo) {
            return todo.status === 'review'
        });
        vm.todos[3] = todos.filter(function (todo) {
            return todo.status === 'done'
        });
    }
    
    function onAdd(title) {
        console.log(title);
        todoService.create({title})
    }

};
