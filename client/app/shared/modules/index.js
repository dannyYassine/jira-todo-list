
import angular from 'angular';

import './app-loader';
import './data-hub';
import './todo';
import Notifications from './notifications';

const sharedModule = angular.module('shared.modules',
    [
        'shared.app-loader',
        'shared.data-hub',
        'shared.todo.service',

        Notifications
    ]);

const _default = sharedModule.name;
export default _default;
