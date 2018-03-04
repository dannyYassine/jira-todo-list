import angular from 'angular';

import DataHubProvider from './dataHub.provider';

angular.module('shared.data-hub', [])
    .provider('dataHub', DataHubProvider);
