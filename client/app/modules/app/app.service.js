
export default function AppService($state, $timeout) {
    
    this.launch = launch;
    
    function launch() {
        $state.go('launch');
        $timeout(function () {
            _showLogin();
        }, 2000);
    }

    function _showLogin() {
        $state.go('login')
    }
    
}