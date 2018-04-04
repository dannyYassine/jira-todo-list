
export default function LoginController(LoginService, UINotificationsService) {
    let vm = this;
    vm.model = {
        email: null,
        password: null
    };
    vm.login = login;

    function login(event) {
        event.preventDefault();
        LoginService.login(vm.model.email, vm.model.password).catch((msg) => {
            UINotificationsService.error(msg);
        });
    }

};