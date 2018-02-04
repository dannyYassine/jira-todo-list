
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import sharedModule from './shared/modules';
import './modules';

angular.module('jira-client',
    [
        uiRouter,

        sharedModule,

        'jira.app',
        'jira.login'
    ]);