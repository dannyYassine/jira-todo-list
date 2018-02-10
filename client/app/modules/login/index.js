
import angular from 'angular';

import LoginComponent from './login.component';
import LoginService from './login.service';

const loginModule = angular.module('jira.login',
    [
    ])
    .service('LoginService', LoginService)
    .component('loginComponent', LoginComponent)
    .config(loginRoutes);
export default loginModule;

function loginRoutes($stateProvider) {
    $stateProvider
        .state('login-layout', {
            url: '',
            views: {
                '': {
                    component: 'loginComponent'
                }
            }
        })
        .state('login', {
            parent: 'login-layout',
            url: '/login',
        })
}