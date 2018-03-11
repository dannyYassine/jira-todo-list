import angular from 'angular';

export default angular.module('board.modals', [])
    .directive('modalClose', function () {
        return {
            scope: {
                close: '=',
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
        controller: function () {
            let vm = this;
            vm.close = false;
            vm.$onInit = $onInit;
            vm.add = add;
            function $onInit () {

            }
            function add(title) {
                vm.onAdd({title: title});
                vm.title = null;
                vm.close = true;
            }
        },
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