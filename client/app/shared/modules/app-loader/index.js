
import angular from 'angular';

import AppLoader from './appLoader.component';
import AppLoaderService from "./appLoader.service";

angular.module('shared.app-loader', [])
    .service('AppLoaderService', AppLoaderService)
    .component('appLoader', AppLoader);
