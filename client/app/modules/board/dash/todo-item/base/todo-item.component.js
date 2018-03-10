
import TodoItemController from './todo-item.controller';

TodoItemController.$inject = [];
const TodoItemComponent = {
    bindings: {
        todo: '<'
    },
    template: require('./todo-item.template.html'),
    controller: TodoItemController,
    controllerAs: 'vm'
};
export default TodoItemComponent;