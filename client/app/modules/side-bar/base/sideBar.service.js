
SideBarService.$inject = ['dataHub', 'LoginService', '$state'];
export default function SideBarService(dataHub, LoginService, $state) {

    return {
        logOut: logOut
    };

    function logOut() {
        LoginService.logOut().then(() => {
            $state.go('login');
            dataHub.setTodos([]);
        })
    }

}