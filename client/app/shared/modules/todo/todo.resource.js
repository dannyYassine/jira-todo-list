
TodosResource.$inject = ['$http'];
export default function TodosResource($http) {

    return {
        getTodos: getTodos
    };

    function getTodos() {
        let request = {
            method: 'GET',
            url: '',
        };
        return $http(request).then(json => json.data());
    }
}