
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
    let timer;

    vm.$onInit = $onInit;
    vm.$onDestroy = $onDestroy;
    vm.onClick = onClick;
    vm.ngClasses = ngClasses;
    
    function $onInit() {
        _addTimer();
    }
    function $onDestroy() {
        $timeout.cancel(timer);
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
        timer = $timeout(function () {
            onClick();
        }, vm.notification.expires());
    }

}