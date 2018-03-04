import angular from 'angular';

export default angular.module('board.modals', [])
    .component('modalAddTodo', {
        template: require('./add-todo.html'),
        bindings: {
            onAdd: '&'
        },
        controller: function () {
            let vm = this;
            vm.$onInit = $onInit;

            function $onInit () {
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