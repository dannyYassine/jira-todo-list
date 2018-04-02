

NotificationsController.$inject = ['UINotificationsService', '$timeout'];
const NotificationsComponent = {
    template: require('./template.html'),
    controller: NotificationsController,
    controllerAs: 'vm'
};
export default NotificationsComponent;

function NotificationsController(UINotificationsService, $timeout) {
    let vm = this;

    vm.$onInit = $onInit;
    vm.onNotificationClick = onNotificationClick;
    vm.notifications = [];

    function $onInit() {
        UINotificationsService.onNewNotification((notification) => {
            vm.notifications.push(notification);
            _addTimer(notification);
        })
    }

    function _addTimer(notification) {
        $timeout(function () {
            vm.notifications.splice(vm.notifications.indexOf(notification),1);
        }, 5000);
    }

    function onNotificationClick(notification) {
        $timeout(function () {
            vm.notifications.splice(vm.notifications.indexOf(notification),1);
        }, 300);
    }

}