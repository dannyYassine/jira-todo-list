

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
        edit: edit,
        retrieve: retrieve,
        remove: remove
    };

    /**
     * Create a new todo with a given text
     * @param model
     * model.title {String}
     * model.status {String}
     */
    function create(model) {
        if (_validateTitle(model.title)) {
            return Promise.reject('Invalid title');
        }
        if (_validateStatus(model.status)) {
            return Promise.reject('Invalid status');
        }
        let state = dataHub.getState();

        let todo = {title: model.title, priority: model.status, status: 'todo', id: `${state.todos.length + 1}`};
        todo.user = {
            name: 'Danny',
            image_url: 'https://instagram.fymq1-1.fna.fbcdn.net/vp/716eb0fe2ed3233b9192c6463a52e6da/5B46B8FC/t51.2885-19/s320x320/16464380_1876471352630153_2529914536832532480_a.jpg'
        };
        state.todos.push(todo);
        dataHub.setTodos(state.todos);
        return todosResource.saveTodos(state.todos);
    }

    /**
     * Remove the todo from system with id
     * @param todo
     */
    function remove(todo) {
        let state = dataHub.getState();
        state.todos = state.todos.filter((aTodo) => {
            return aTodo.id !== todo.id;
        });
        dataHub.setTodos(state.todos);
        return todosResource.deleteTodo(todo).then((data) => {
            return data
        });
    }

    /**
     *
     */
    function retrieve() {
        return todosResource.getTodos().then((json) => {
            dataHub.setTodos(json.data.data);
            return json.data.data;
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
        let state = dataHub.getState();
        let todo = state.todos.find((todo) => {
            return todo.id === todoId;
        });
        if (options.status) {
            todo.status = options.status;
        }
        dataHub.setTodos(state.todos);
        todosResource.saveTodos(state.todos);
    }

    function _validateTitle(title) {
        return !title || title.length <=3;
    }

    function _validateStatus(status) {
        return !status && (status !== 'low' || status !== 'medium' || status !== 'high');
    }
}