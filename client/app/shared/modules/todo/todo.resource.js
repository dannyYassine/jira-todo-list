
TodosResource.$inject = ['$http', 'appConfig', 'Restangular'];
export default function TodosResource($http, appConfig, Restangular) {

    return {
        getTodos: getTodos,
        saveTodos: saveTodos
    };

    function getTodos() {
        return $http.get(`${appConfig.API_HOST}/todos`).then();
    }
    
    function saveTodos(todos) {
        const todo = Restangular.all('todos');
        return todo.post({todos: todos});
    }
}