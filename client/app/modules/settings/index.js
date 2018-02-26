
import angular from 'angular';

import SettingsService from './settings.service';
import SettingsComponent from './settings.component';

export default angular.module('jira.settings',
    [
    ])
    .service('SettingsService', SettingsService)
    .component('settings', SettingsComponent)
    .config(appRoutes)
    .name;

appRoutes.$inject = ['$stateProvider'];
function appRoutes($stateProvider) {
    $stateProvider
        .state('settings', {
            parent: 'app-layout',
            url: '/settings',
            component: 'settings'
        })
}
