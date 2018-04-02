import angular from 'angular';

import './todo-detail';
import './dash';
import './modals/add-todo';
//
import BoardService from './base/board.service';
import BoardResource from './base/board.resource';
import BoardComponent from './base/board.component';

export default angular.module('jira-board',
    [
        'board.modals',
        'board.todo-item',
        'board.dash',
        'board.todo.detail'
    ])
    .service('BoardService', BoardService)
    .service('BoardResource', BoardResource)
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
