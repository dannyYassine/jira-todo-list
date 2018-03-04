
import angular from 'angular';

import './app-loader';
import './data-hub';

const sharedModule = angular.module('shared.modules',
    [
        'shared.app-loader',
        'shared.data-hub'
    ]);

const _default = sharedModule.name;
export default _default;
