
NotificationController.$inject = ['$timeout'];
const NotificationComponent = {
    bindings: {
        notification: '<',
        onNotificationClick: '&onNotificationClick'
    },
    template: require('./notification-template.html'),
    controller: NotificationController,
    controllerAs: 'vm'
};
export default NotificationComponent;

function NotificationController($timeout) {
    let vm = this;

    vm.$onInit = $onInit;
    vm.onClick = onClick;
    vm.ngClasses = ngClasses;
    
    function $onInit() {
        _addTimer();
    }
    
    function onClick() {
        vm.clicked = true;
        vm.onNotificationClick({notification: vm.notification});
    }
    
    function ngClasses() {
        let classes = [`alert-${vm.notification.type}`];

        if (vm.clicked) {
            classes.push('notification-dismiss');
        }

        return classes;
    }

    function _addTimer() {
        $timeout(function () {
            onClick();
        }, 5000);
    }

}