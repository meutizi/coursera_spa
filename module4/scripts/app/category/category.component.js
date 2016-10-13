(function() {
    'use strict';

    angular.module('MenuApp')
        .component('category', {
            templateUrl: 'scripts/app/category/category.template.html',
            bindings: {
                cats: '<'
            }
        });

})();