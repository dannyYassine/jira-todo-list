import angular from "angular";
import TodoDetailComponent from './todo.detail.component';

TodoDetailComponent.$inject = ['todoService', 'BoardSelectedTodoService', 'UINotificationsService'];
export default angular.module('board.todo.detail',
    [
    ])
    .component('todoDetail', TodoDetailComponent)
    .name;