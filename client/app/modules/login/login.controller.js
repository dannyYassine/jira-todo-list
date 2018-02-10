
export default function LoginController(LoginService) {
    let vm = this;
    
    vm.login = login;

    function login(event) {
        event.preventDefault();
        LoginService.login();
    }

};