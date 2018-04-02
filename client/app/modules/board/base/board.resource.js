
BoardResource.$inject = ['$http'];
export default function BoardResource ($http) {

    return {
        get: get
    };
    
    function get() {
        $http.get('http://localhost:3000/api/todos').then((response) => {
            return response.json();
        })
    }

}