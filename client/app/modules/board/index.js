
import angular from 'angular';

import BoardService from './board.service';
import BoardComponent from './board.component';

export default angular.module('jira-board',
    [
    ])
    .service('BoardService', BoardService)
    .component('board', BoardComponent)
    .config(appRoutes)
    .name;

appRoutes.$inject = ['$stateProvider'];
function appRoutes($stateProvider) {
    $stateProvider
        .state('board', {
            parent: 'app-layout',
            url: '/board',
            component: 'board',

        })
}
