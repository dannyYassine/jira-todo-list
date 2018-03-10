
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import sharedModule from './shared/modules';
import './modules';

angular.module('jira-client',
    [
        uiRouter,

        sharedModule,

        'jira.app',
        'jira-board',
        'jira.login',
        'jira.side-bar',
        'jira.settings'
    ])
    .config(configLocationProvider)
    .config(configRouterProvider)
    .config(appStateProvider)
    .config(dataHubProvider);

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

dataHubProvider.$inject = ['dataHubProvider'];
function dataHubProvider(dataHubProvider) {

}
