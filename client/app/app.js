
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import './modules';

let clientApp = angular.module('jira',
    [
        uiRouter,


        'jira.app'
    ]);