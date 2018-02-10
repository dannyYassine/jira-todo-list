
import angular from 'angular';
import AppService from './app.service';
import AppComponent from './app.component';

angular.module('jira.app',
    [
    ])
    .service('AppService', AppService)
    .component('app', AppComponent)
    .config(appRoutes);

function appRoutes($stateProvider) {
    $stateProvider
        .state('app-layout', {
            url: '',
            views: {
                '': {
                    component: 'app'
                }
            }
        })
        .state('app', {
            parent: 'app-layout',
            url: '',
        })
}