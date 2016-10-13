(function() {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'scripts/app/items/items.template.html',
            bindings: {
                menuItems: '<'
            }
        });

})();