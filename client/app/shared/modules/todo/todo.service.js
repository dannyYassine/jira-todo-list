

TodoService.$inject = ['dataHub'];
export default function TodoService(dataHub) {

    return {
        create: create,
        remove: remove,
        edit: edit
    };

    /**
     * Create a new todo with a given text
     * @param text
     */
    function create(text) {
        let todo = {title: text, priority: 'medium', status: 'todo'};
        todo.user = {
            name: 'Danny',
            image_url: 'https://instagram.fymq1-1.fna.fbcdn.net/vp/716eb0fe2ed3233b9192c6463a52e6da/5B46B8FC/t51.2885-19/s320x320/16464380_1876471352630153_2529914536832532480_a.jpg'
        };
        let state = dataHub.getState();
        state.todos.push(todo);
        dataHub.setTodos(state.todos);
    }

    /**
     * Remove the todo from system with id
     * @param todoId
     */
    function remove(todoId) {
        let state = dataHub.getState();
        state.todos = state.filter((todo) => {
            return todo.id !== todoId;
        });
        dataHub.setTodos(state.todos);
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