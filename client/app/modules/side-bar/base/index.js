
import angular from 'angular';
import SideBarService from './sideBar.service';
import SideBarComponent from './sideBar.component';

export default angular.module('jira.base.side-bar',
    [
    ])
    .service('SideBarService', SideBarService)
    .component('sideBarComponent', SideBarComponent)
    .name;