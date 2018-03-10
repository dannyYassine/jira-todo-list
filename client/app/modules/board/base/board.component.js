
const BoardComponent = {
    template: require('./board.template.html'),
    controller: BoardController,
    controllerAs: 'vm'
};

BoardController.$inject = ['dataHub', 'todoService'];
export function BoardController(dataHub, todoService) {
    let vm = this;
    vm.click = function () {
        todoService.create('habibi')
    };
    vm.$onInit = $onInit;
    vm.onAdd = onAdd;

    function $onInit() {
        vm.todos = dataHub.getState().todos;
        dataHub.suscribe({state: 'todos', cb: function (todos) {
            vm.todos = todos;
        }});
    }

    function onAdd(title) {
        console.log(title);
        todoService.create({title})
    }

};

export default BoardComponent;