
export default function LoginService($state, $http, $templateCache) {
    this.login = login;
    this.logOut = logOut;

    function login() {
        $http.post('http://localhost:3000/api/login').then(() => {
            $state.go('board');
        })
    }
    function logOut() {
        return $http.post('http://localhost:3000/api/logout').then(() => {
            $templateCache.removeAll();
        })
    }
}