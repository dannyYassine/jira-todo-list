
AppLoaderService.$inject = ['$state', '$timeout', '$location'];
export default function AppLoaderService($state, $timeout, $location) {
    var originalUrl;
    this.launch = launch;

    function launch() {
        originalUrl = $location.path();
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
        if (originalUrl.length > 1) {
            $location.path(originalUrl);
        } else {
            $state.go('board')
        }
    }

}