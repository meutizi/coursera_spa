(function() {
    'use strict';
    angular.module('shoppingList', []);

    angular.module('shoppingList')
        .service('shoppingListCheckOffService', shoppingListCheckOffService)
        .controller('toBuyController', toBuyController)
        .controller('alreadyBoughtController', alreadyBoughtController);

    function shoppingListCheckOffService() {
        var self = this;

        var toBuyItems = [
            { name: "bags of cookies", quantity: 10 },
            { name: "cases of soda", quantity: 10 },
            { name: "orange", quantity: 1 },
            { name: "onion", quantity: 1 },
            { name: "pear", quantity: 1 }
        ];
        var boughtItems = [];

        self.getToBuyItems = function() {
            return toBuyItems;
        };
        self.getBoughtItems = function() {
            return boughtItems;
        };

        self.buyItem = function(item) {
            toBuyItems.splice(toBuyItems.indexOf(item), 1);

            boughtItems.push(item);
        };

    };


    toBuyController.$inject = ['$scope', 'shoppingListCheckOffService'];

    function toBuyController($scope, shoppingListCheckOffService) {
        var self = this;
        self.emptyMessage = "Everything is bought!";

        self.items = shoppingListCheckOffService.getToBuyItems();

        self.buyItem = function(item) {
            shoppingListCheckOffService.buyItem(item);
        };
    };

    alreadyBoughtController.$inject = ['$scope', 'shoppingListCheckOffService'];

    function alreadyBoughtController($scope, shoppingListCheckOffService) {
        var self = this;
        self.emptyMessage = "Nothing bought yet.";

        self.items = shoppingListCheckOffService.getBoughtItems();

    };


})();