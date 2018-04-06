
import angular from 'angular';
import UINotificationsService from './notifications.service';
import NotificationsComponent from './notifications.component';
import NotificationComponent from './notification.component';

UINotificationsService.$inject = ['$rootScope'];
export default angular.module('shared.notifications', [])
    .component('notifications', NotificationsComponent)
    .component('notification', NotificationComponent)
    .service('UINotificationsService', UINotificationsService)
    .name;

