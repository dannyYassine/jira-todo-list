
export default function BoardController(dataHub) {
    let vm = this;
    vm.click = function () {
        dataHub.addTodo({title: 'Habibi'})
    };
    vm.$onInit = $onInit;
    vm.onAdd = onAdd;
    
    function $onInit() {
        vm.todos = dataHub.getState().todos;

        dataHub.suscribe((state) => {
            vm.todos = state.todos;
        });
    }
    
    function onAdd(title) {
        console.log(title);
        dataHub.addTodo({title})
    }

};
