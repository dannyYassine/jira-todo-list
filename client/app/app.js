
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import uiBootrap from 'angular-ui-bootstrap';

import sharedModule from './shared/modules';
import './modules';

angular.module('jira-client',
    [
        uiRouter,
        uiBootrap,

        sharedModule,

        'jira.app',
        'jira-board',
        'jira.login',
        'jira.side-bar',
        'jira.settings'
    ])
    .config(configLocationProvider)
    .config(configRouterProvider)
    .config(appStateProvider);

configLocationProvider.$inject = ['$locationProvider'];
function configLocationProvider ($locationProvider) {
    $locationProvider.html5Mode(true);
}

configRouterProvider.$inject = ['$urlRouterProvider'];
function configRouterProvider($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}

appStateProvider.$inject = ['$stateProvider'];
function appStateProvider($stateProvider) {
    $stateProvider
        .state('launch', {
            url: ''
        })
}