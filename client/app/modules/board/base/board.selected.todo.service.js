import EventEmitter from 'wolfy87-eventemitter';

BoardSelectedTodoService.$inject = [];
export default function BoardSelectedTodoService () {
    const emitter = new EventEmitter();
    let selectedTodo = null;

    return {
        selectTodo: selectTodo,
        getTodo: getTodo,
        onSelectedTodo: onSelectedTodo,
        off: off
    };

    function getTodo() {
        return selectedTodo;
    }

    function selectTodo(todo) {
        if (selectedTodo) {
            selectedTodo.isSelected = false;
            selectedTodo = null;
        }
        if (todo) {
            todo.isSelected = true;
        }
        selectedTodo = todo;
        emitter.emitEvent('BoardSelectedTodo:selectedTodo', [selectedTodo]);
    }

    function onSelectedTodo(cb) {
        emitter.on('BoardSelectedTodo:selectedTodo', cb);
    }

    function off(cb) {
        emitter.off('BoardSelectedTodo:selectedTodo', cb);
    }
}