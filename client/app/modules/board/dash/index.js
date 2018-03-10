
import angular from 'angular';

import './todo-item'
import BoardDashComponent from "./base/board.dash.component";

angular.module('board.dash',
    [
    ])
    .component('dash', BoardDashComponent);
