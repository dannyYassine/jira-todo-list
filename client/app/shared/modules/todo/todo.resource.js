
TodosResource.$inject = ['$http'];
export default function TodosResource($http) {

    return {
        getTodos: getTodos
    };

    function getTodos() {
        return $http.get('http://localhost:3000/api/todos');
    }
}