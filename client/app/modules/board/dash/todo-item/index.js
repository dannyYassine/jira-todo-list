
import angular from 'angular';

import TodoItemComponent from './base/todo-item.component';
import TodoItemStatusComponent from "./status/todoItemStatus.component";

angular.module('board.todo-item',
    [
    ])
    .component('todoItem', TodoItemComponent)
    .component('todoItemStatus', TodoItemStatusComponent);
