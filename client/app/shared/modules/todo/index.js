import angular from 'angular';
import TodoService from "./todo.service";
import TodosResource from "./todo.resource";

angular.module('shared.todo.service', [])
    .factory('todoService', TodoService)
    .factory('todosResource', TodosResource);

