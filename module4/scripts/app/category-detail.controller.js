(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoryDetailController', CategoryDetailController);

    CategoryDetailController.$inject = ['categoryItems'];

    function CategoryDetailController(categoryItems) {
        var self = this;
        self.categoryItems = categoryItems.data.menu_items;

    };



})();