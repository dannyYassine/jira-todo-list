
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import uiBootrap from 'angular-ui-bootstrap';
require('angular-loading-bar');
require('angular-animate');
require('restangular');

import sharedModule from './shared/modules';
import './modules';
import config from './config';

angular.module('jira-client',
    [
        uiRouter,
        uiBootrap,
        'angular-loading-bar',
        'ngAnimate',
        'restangular',

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
    .config(angularLoadingBar)
    .config(restangularConfig)
    .config($httpInterceptors);

configLocationProvider.$inject = ['$locationProvider'];
function configLocationProvider ($locationProvider) {
    $locationProvider.html5Mode(true);
}

angularLoadingBar.$inject = ['cfpLoadingBarProvider'];
function angularLoadingBar(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.latencyThreshold = 1;
    cfpLoadingBarProvider.includeSpinner = false;
}

$httpInterceptors.$inject = ['$httpProvider'];
function $httpInterceptors($httpProvider) {
    $httpProvider.interceptors.push(['$state', function($state) {
        return {
            'responseError': function(rejection) {
                if (rejection.status === 401) {
                    $state.go('login');
                }
                return rejection;
            }
        };
    }]);
}

configRouterProvider.$inject = ['$urlRouterProvider'];
function configRouterProvider($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}

restangularConfig.$inject = ['RestangularProvider', 'appConfig'];
function restangularConfig(RestangularProvider, appConfig) {
    RestangularProvider.setBaseUrl(appConfig.API_HOST);
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
