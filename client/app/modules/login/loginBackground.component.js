
const LoginBackgroundComponent = {
    template: require('./loginBackground.html'),
    controller: LoginBackgroundController,
    controllerAs: 'vm'
};

function LoginBackgroundController() {
    let vm = this;

    vm.blocks = _createBlocks();

    function _createBlocks() {
        let blocks = [];
        let i = 1000;
        while (i > 0) {
            blocks.push(i);
            --i;
        }
        return blocks;
    }
}

export default LoginBackgroundComponent;
