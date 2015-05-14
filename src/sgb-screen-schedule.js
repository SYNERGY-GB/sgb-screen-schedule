'use strict';

angular.module('sgb-screen-schedule', ['megazord'])
    .controller('sgb-screen-schedule-controller', ['$stateParams', '_screen', '_screenParams', '$scope', function($stateParams, _screen, _screenParams, $scope){
        _screen.initialize($scope, _screenParams);

        $scope.schedule = $stateParams.data;
    }]);

