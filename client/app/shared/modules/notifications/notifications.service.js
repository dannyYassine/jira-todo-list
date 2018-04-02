import EventEmitter from 'wolfy87-eventemitter';

function Notification(msg, type = 'success') {
    this.msg = msg;
    this.type = type;

    this.expires = expires;

    function expires() {
        switch (this.type) {
            case 'success':
                return 2000;
            case 'warning':
                return 3000;
            case 'danger':
                return 4000;
            default:
                return 2000;
        }
    }
}

export default function UINotificationsService () {
    const emitter = new EventEmitter();
    const EVENT = 'UINotificationsService:NEW_NOTIFICATION';

    return {
        success: success,
        warning: warning,
        error: error,
        onNewNotification: onNewNotification
    };
    
    function success(msg = 'Success') {
        _addNotification(new Notification(msg, 'success'))
    }
    
    function warning(msg = 'Warning') {
        _addNotification(new Notification(msg, 'warning'))
    }
    
    function error(msg = 'Error') {
        _addNotification(new Notification(msg, 'danger'))
    }

    function onNewNotification(cb) {
        emitter.on(EVENT, cb);
    }

    function _addNotification(notification) {
        emitter.emit(EVENT, notification);
    }
    
}