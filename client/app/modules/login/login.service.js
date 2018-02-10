
export default function LoginService($state) {
    this.login = login;

    function login() {
        localStorage.setItem('isLoggedIn', true);
        $state.go('app');
    }
}