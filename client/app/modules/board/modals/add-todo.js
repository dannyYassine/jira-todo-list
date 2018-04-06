import angular from 'angular';

export default angular.module('board.modals', [])
    .directive('modalClose', function () {
        return {
            scope: {
                close: '=modalClose',
            },
            restrict: 'A',
            link: function (scope, el, attrs) {
                scope.$watch('close', function (nv, ov) {
                    if (nv) {
                        $('.modal').modal('hide');
                        scope.close = false;
                    }
                })
            }
        }
    })
    .component('modalAddTodo', {
        template: require('./add-todo.html'),
        bindings: {
            onAdd: '&'
        },
        controller: ModelAddTodoController,
        controllerAs: 'vm'
    })
    .component('modal', {
        template: require('./modal.html'),
        bindings: {
            modalId: '@'
        },
        transclude: {
            header: '?modalHeader',
            body: '?modalBody',
            footer: '?modalFooter'
        },
        controller: function () {
            let vm = this;
            vm.title = '';
        },
        controllerAs: 'vm'
    })
    .name;

ModelAddTodoController.$inject = ['UINotificationsService', 'todoService'];
function ModelAddTodoController(UINotificationsService, todoService) {
    let vm = this;
    vm.model = {};

    vm.close = false;
    vm.$onInit = $onInit;
    vm.add = add;
    function $onInit () {

    }
    function add() {
        todoService.create(vm.model)
            .then(() => {
                UINotificationsService.success('A new to-do sucessfully created!');
                vm.model.title = '';
                vm.model.status = '';
                vm.close = true;
                vm.onAdd();
            })
            .catch((msg) => {
                UINotificationsService.error(msg);
            });

    }
}