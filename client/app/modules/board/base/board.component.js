
const BoardComponent = {
    template: require('./board.template.html'),
    controller: BoardController,
    controllerAs: 'vm'
};

BoardController.$inject = ['dataHub', 'todoService', 'BoardService', 'UINotificationsService'];
export function BoardController(dataHub, todoService, BoardService, UINotificationsService) {
    let vm = this;
    vm.click = function () {
        todoService.create('habibi')
    };
    vm.$onInit = $onInit;
    vm.onAdd = onAdd;
    vm.testAlert = testAlert;

    function $onInit() {
        dataHub.suscribe({state: 'todos', cb: function (todos) {
            vm.todos = todos;
        }});
        todoService.retrieve().then((todos) => {
            vm.todos = todos;
        })
    }

    function onAdd(title) {
        todoService.create(title)
    }

    function testAlert() {
        UINotificationsService.success('Hello');
    }

};

export default BoardComponent;