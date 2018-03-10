
import angular from 'angular';

import './todo-item'

import BoardDashComponent from "./base/board.dash.component";
import BoardDashDragComponent from "./base/board.dash.drag.component";

angular.module('board.dash',
    [
        'board.todo-item'
    ])
    .component('dash', BoardDashComponent)
    .component('dashDrag', BoardDashDragComponent);
