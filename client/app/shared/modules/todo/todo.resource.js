
TodosResource.$inject = ['$http', 'appConfig'];
export default function TodosResource($http, appConfig) {

    return {
        getTodos: getTodos
    };

    function getTodos() {
        return $http.get(`${appConfig.API_HOST}/api/todos`);
    }
}