
import angular from 'angular';

import LoginComponent from './login.component';

let loginModule = angular.module('jira.login',
    [
    ])
    .component('loginComponent', LoginComponent);

export default loginModule;