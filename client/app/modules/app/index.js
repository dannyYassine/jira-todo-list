
import angular from 'angular';

import AppComponent from './app.component';

let appModule = angular.module('jira.app',
    [
    ])
    .component('app', AppComponent);

export default appModule;