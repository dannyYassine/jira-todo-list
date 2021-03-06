
const BoardDashComponent = {
    bindings: {
        todos: '<'
    },
    template: require('./dash.template.html'),
    controller: BoardDash,
    controllerAs: 'vm'
};

BoardDash.$inject = ['todoService', 'BoardSelectedTodoService'];
function BoardDash(todoService, BoardSelectedTodoService) {
    let vm = this;

    vm.$onInit = $onInit;
    vm.dragStart = dragStart;
    vm.dragEnd = dragEnd;
    vm.todoClicked = todoClicked;

    vm.dragChangeSection = dragChangeSection;
    vm.inTodo = inTodo;
    vm.inProgress = inProgress;
    vm.inReview = inReview;
    vm.inDone = inDone;
    vm.onTodoClick = onTodoClick;

    vm.draggingTodo = null;
    vm.isDragging = false;

    function $onInit() {

    }

    function inTodo() {
        return vm.todos.filter((todo) => {
            return todo.status === 'todo';
        })
    }
    function inProgress() {
        return vm.todos.filter((todo) => {
            return todo.status === 'progress';
        })
    }
    function inReview() {
        return vm.todos.filter((todo) => {
            return todo.status === 'review';
        })
    }
    function inDone() {
        return vm.todos.filter((todo) => {
            return todo.status === 'done';
        })
    }
    
    function dragStart() {
        vm.isDragging = true;
    }
    function dragChangeSection(todoId, sectionId) {
    }
    function dragEnd(todoId, sectionId) {
        vm.isDragging = false;
        todoService.edit(todoId, {status: mapSectionIdToStatus(sectionId)});
    }
    function todoClicked(todoId, sectionId) {
        let todo = vm.todos.find((todo) => {
            return todo.id === todoId;
        });
        BoardSelectedTodoService.selectTodo(todo);
    }

    function onTodoClick(todo) {
        BoardSelectedTodoService.selectTodo(todo);
    }

    function mapSectionIdToStatus(sectionId) {
        switch (sectionId) {
            case "0":
                return 'todo';
            case "1":
                return 'progress';
            case "2":
                return 'review';
            case "3":
                return 'done';
        }
    }

}
export default BoardDashComponent;