
export default function LoginService($state, Restangular, $templateCache) {
    this.login = login;
    this.logOut = logOut;

    function login(email, password) {
        if (_validateEmail(email)) {
            return Promise.reject('Invalid email');
        }
        if (_validatePassword(password)) {
            return Promise.reject('Invalid password');
        }
        const login = Restangular.all('login');
        return login.post({email, password}).then((json) => {
            if (!json.error) {
                $state.go('board');
            }
        })
    }
    function logOut() {
        const logout = Restangular.all('logout');
        return logout.post().then(() => {
            $templateCache.removeAll();
        })
    }

    function _validateEmail(email) {
        return !email
    }

    function _validatePassword(password) {
        return !password
    }
}