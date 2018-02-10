
export default function AppLoaderService($state, $timeout) {

    this.launch = launch;

    function launch() {
        $state.go('launch');
        $timeout(function () {
            const val = localStorage.getItem('isLoggedIn');
            val ?
                _showApp() :
                _showLogin();
        }, 2000);
    }

    function _showLogin() {
        $state.go('login')
    }

    function _showApp() {
        $state.go('app')
    }

}