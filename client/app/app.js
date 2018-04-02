
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import uiBootrap from 'angular-ui-bootstrap';

import sharedModule from './shared/modules';
import './modules';
import config from './config';
console.log(config);

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
    .constant('appConfig', config)
    .config(configLocationProvider)
    .config(configRouterProvider)
    .config(appStateProvider)
    .config(dataHubProvider)
    .config($httpInterceptors);

configLocationProvider.$inject = ['$locationProvider'];
function configLocationProvider ($locationProvider) {
    $locationProvider.html5Mode(true);
}

$httpInterceptors.$inject = ['$httpProvider'];
function $httpInterceptors($httpProvider) {
    $httpProvider.interceptors.push(['$state', function($state) {
        return {
            'responseError': function(rejection) {
                if (rejection.status === 401) {
                    $state.go('login');
                }
            }
        };
    }]);
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
