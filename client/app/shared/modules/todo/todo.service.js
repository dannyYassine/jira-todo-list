

TodoService.$inject = ['dataHub', 'todosResource'];
export default function TodoService(dataHub, todosResource) {

    const props = {
        state: {
            isLoading: false
        },
        data: {}
    };

    return {
        create: create,
        move: move,
        retrieve: retrieve,
        doneDragging: doneDragging,
        remove: remove,
        edit: edit
    };

    /**
     * Create a new todo with a given text
     * @param text
     */
    // TODO: replace ID
    function create(text) {
        let state = dataHub.getState();

        let todo = {title: text, priority: 'medium', status: 'todo', id: `${state.todos.length + 1}`};
        todo.user = {
            name: 'Danny',
            image_url: 'https://instagram.fymq1-1.fna.fbcdn.net/vp/716eb0fe2ed3233b9192c6463a52e6da/5B46B8FC/t51.2885-19/s320x320/16464380_1876471352630153_2529914536832532480_a.jpg'
        };
        state.todos.push(todo);
        dataHub.setTodos(state.todos);
    }
    
    function move(todoId, status) {
        let state = dataHub.getState();
        let todo = state.todos.find((todo) => {
            return todo.id === todoId;
        });
        todo.status = status;
        dataHub.setTodos(state.todos);
    }
    
    function doneDragging() {
        let state = dataHub.getState();
        dataHub.setTodos(state.todos);
    }

    /**
     * Remove the todo from system with id
     * @param todoId
     */
    function remove(todoId) {
        let state = dataHub.getState();
        state.todos = state.todos.filter((todo) => {
            return todo.id !== todoId;
        });
        dataHub.setTodos(state.todos);
    }

    /**
     *
     */
    function retrieve() {
        return todosResource.getTodos().then(() => {
            dataHub.setTodos(state.todos);
        });
    }
    
    /**
     * Edits todo with given options
     * @param todoId
     * @param options
     * @throws EditTodoException
     * options.title
     * options.priority
     */
    function edit(todoId, options) {

    }

}