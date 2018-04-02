
NotificationController.$inject = [];
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

function NotificationController() {
    let vm = this;

    vm.$onInit = $onInit;
    vm.ngClasses = ngClasses;
    
    function $onInit() {

    }
    
    function ngClasses() {
        let classes = [vm.notification.type];

        if (vm.clicked) {
            classes.push('notification-dismiss');
        }

        return classes;
    }

}