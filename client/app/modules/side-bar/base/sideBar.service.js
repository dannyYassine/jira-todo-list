
SideBarService.$inject = ['dataHub', 'LoginService', '$state'];
export default function SideBarService(dataHub, LoginService, $state) {

    return {
        logOut: logOut
    };

    function logOut(cb) {
        LoginService.logOut().then(() => {
            cb();
            $state.go('login');
            dataHub.setTodos([]);
        })
    }

}