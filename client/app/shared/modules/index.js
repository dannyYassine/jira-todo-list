
import angular from 'angular';

import './app-loader';
import './data-hub';
import './todo';

const sharedModule = angular.module('shared.modules',
    [
        'shared.app-loader',
        'shared.data-hub',
        'shared.todo.service'
    ]);

const _default = sharedModule.name;
export default _default;
