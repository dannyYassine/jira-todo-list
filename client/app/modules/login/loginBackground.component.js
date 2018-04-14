
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
        let i = 250;
        while (i > 0) {
            blocks.push(new Box());
            --i;
        }
        return blocks;
    }
}

function Box() {
    this.class = Math.random() <= 0.5 ? ['box-fade'] : [];
    this.animationSpeed = Math.random() * 10 + 5 + 's';
}

export default LoginBackgroundComponent;
