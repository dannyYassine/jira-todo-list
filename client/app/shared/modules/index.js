
import angular from 'angular';

import './app-loader';

let sharedModule = angular.module('shared.modules',
    [
        'shared.app-loader'
    ]);

const _default = sharedModule.name;
export default _default;
