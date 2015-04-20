'use strict';

angular.module('sgb-screen-schedule', ['megazord'])
    .controller('sgb-screen-schedule-controller', ['$stateParams', '$scope', function($stateParams, $scope){
        $scope.schedule = $stateParams.data;
    }]);