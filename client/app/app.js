
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import './modules';

let clientApp = angular.module('jira-client',
    [
        uiRouter,


        'jira.app',
        'jira.login'
    ]);