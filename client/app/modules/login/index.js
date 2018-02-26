
import angular from 'angular';

import LoginComponent from './login.component';
import LoginService from './login.service';
import LoginBackgroundComponent from "./loginBackground.component";

const loginModule = angular.module('jira.login',
    [
    ])
    .service('LoginService', LoginService)
    .component('loginBackgroundComponent', LoginBackgroundComponent)
    .component('loginComponent', LoginComponent)
    .config(loginRoutes);
export default loginModule;

function loginRoutes($stateProvider) {
    $stateProvider
        .state('login-layout', {
            url: '',
            component: 'loginComponent'
        })
        .state('login', {
            parent: 'login-layout',
            url: '/login',
        })
        .state('reset-password', {
            parent: 'login-layout',
            url: '/reset-password',
        })
        .state('forgot-password', {
            parent: 'login-layout',
            url: '/forgot-password',
        })
}