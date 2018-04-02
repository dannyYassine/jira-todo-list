
import angular from 'angular';
import rootComponent from './root.component';

export default angular.module('root', [])
    .component('root', rootComponent)
    .name;