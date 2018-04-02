
AppLoaderService.$inject = ['$state', '$timeout', '$location', 'todoService', 'dataHub'];
export default function AppLoaderService($state, $timeout, $location, todoService, dataHub) {
    var originalUrl;
    this.launch = launch;

    function launch() {
        originalUrl = $location.path();
        $state.go('launch');
        $timeout(function () {
            todoService.retrieve().then(() => {
                _showApp();
            })
        }, 1000)
    }

    function _showApp() {
        if (originalUrl.length > 1) {
            $location.path(originalUrl);
        } else {
            $state.go('board')
        }
    }

}