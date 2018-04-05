
TodosResource.$inject = ['$http', 'appConfig', 'Restangular'];
export default function TodosResource($http, appConfig, Restangular) {

    return {
        getTodos: getTodos,
        saveTodos: saveTodos,
        deleteTodo: deleteTodo
    };

    function getTodos() {
        return $http.get(`${appConfig.API_HOST}/todos`).then();
    }
    
    function saveTodos(todos) {
        const todo = Restangular.all('todos');
        return todo.post({todos: todos});
    }

    function deleteTodo(todo) {
        const todos = Restangular.all('todos');
        return todos.remove({todo: todo});
    }
}