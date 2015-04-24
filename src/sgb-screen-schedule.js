'use strict';

angular.module('sgb-screen-schedule', ['megazord'])
    .controller('sgb-screen-schedule-controller', ['$stateParams', '_screenParams', '$scope', function($stateParams, _screenParams, $scope){
        $scope.title = _screenParams.title;
        $scope.schedule = $stateParams.data;
    }]);

