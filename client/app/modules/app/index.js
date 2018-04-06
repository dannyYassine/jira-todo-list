
import angular from 'angular';
import AppService from './app.service';
import AppComponent from './app.component';

AppService.$inject = ['$state', '$timeout'];

angular.module('jira.app',
    [
    ])
    .service('AppService', AppService)
    .service('AppLaunchService', function ($timeout) {
        this.user = function () {
            return new Promise(resolve, reject, function () {
                $timeout(function () {
                    resolve({});
                }, 2000);
            });
        }
    })
    .component('app', AppComponent)
    .config(appRoutes);

appRoutes.$inject = ['$stateProvider'];
function appRoutes($stateProvider) {
    $stateProvider
        .state('app-layout', {
            url: '',
            abstract: true,
            component: 'app',
            resolve: {
                todos: ['todoService', function (todoService) {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            todoService.retrieve().then((data) => {
                                resolve(data)
                            });
                        }, 1000);
                    });
                }]
            }
        })
}