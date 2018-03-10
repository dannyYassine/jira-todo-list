import angular from 'angular';
import TodoService from "./todo.service";

angular.module('shared.todo.service', [])
    .factory('todoService', TodoService);
