
const TodoItemStatusComponent = {
    bindings: {
        priority: '<'
    },
    template: require('./todoItemStatus.html'),
    controller: TodoItemStatusController,
    controllerAs: 'vm'
};

TodoItemStatusController.$inject = [];
function TodoItemStatusController() {
    let vm = this;
    
    vm.$onInit = $onInit;
    
    function $onInit() {
        
    }
    
}
export default TodoItemStatusComponent;
