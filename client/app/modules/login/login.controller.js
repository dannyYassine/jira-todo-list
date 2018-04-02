
export default function LoginController(LoginService) {
    let vm = this;
    vm.model = {
        email: null,
        password: null
    };
    vm.login = login;

    function login(event) {
        event.preventDefault();
        LoginService.login(vm.model.email, vm.model.password);
    }

};