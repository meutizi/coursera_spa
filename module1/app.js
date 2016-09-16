(function() {
    'use strict';
    angular.module('LunchCheck', []);

    angular.module('LunchCheck').controller('LunchCheckController', lunchCheckController);

    lunchCheckController.$inject = ['$scope'];
    function lunchCheckController($scope) {
        $scope.dishes = null;
        $scope.checkLunch = function() {
            
            if (!$scope.dishes) {
                $scope.lunchMessage = 'Please enter data first'; 
            }
            else {
                var numItems = $scope.dishes.split(',').length;
                if (numItems <= 3) {
                    $scope.lunchMessage = 'Enjoy!';
                }
                else {
                    $scope.lunchMessage = 'Too much!';
                }
            }

        };
        $scope.lunchMessage = '';
    };
})();