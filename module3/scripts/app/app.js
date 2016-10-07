(function() {
    'use strict';
    angular.module('NarrowItDownApp', []);

    angular.module('NarrowItDownApp')
        .service('MenuSearchService', MenuSearchService)
        .controller('NarrowItDownController', NarrowItDownController)
        .directive('foundItems', FoundItemsDirective);;

    MenuSearchService.$inject = ['$http'];

    function MenuSearchService($http) {
        var self = this;

        self.getMatchedMenuItems = function(searchTerm) {
            return $http({
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function(result) {
                var foundItems = _.filter(result.data.menu_items, function(item) {
                    return item.description.indexOf(searchTerm) !== -1;
                });
                return foundItems;
            });
        };
    };

    NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];

    function NarrowItDownController($scope, MenuSearchService) {
        var self = this;
        self.emptyMessage = "Everything is bought!";
        self.found = [];
        self.narrowItDown = function() {
            if (self.searchTerm) {
                MenuSearchService.getMatchedMenuItems(self.searchTerm).then(function(results) {
                    self.found = results;
                });
            } else {
                self.found = [];
            }
        };
        self.removeItem = function(index) {
            self.found.splice(index, 1);
        };
    };

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItem.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: function() {
                var self = this;
            },
            controllerAs: 'list',
            bindToController: true
        };
        return ddo;
    };

})();