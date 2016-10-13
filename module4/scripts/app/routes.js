(function() {
    'use strict';

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
                url: '/',
                templateUrl: 'scripts/app/home.template.html'
            })
            .state('categoryList', {
                url: '/categories',
                templateUrl: 'scripts/app/categories.template.html',
                controller: 'CategoryController as catCtrl',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            }).state('items', {
                url: '/category-items/{categoryId}',
                templateUrl: 'scripts/app/category-detail.template.html',
                controller: 'CategoryDetailController as categoryDetail',
                resolve: {
                    categoryItems: ['$stateParams', 'MenuDataService',
                        function($stateParams, MenuDataService) {
                            return MenuDataService.getItemsForCategory($stateParams.categoryId);
                        }
                    ]
                }
            });
    }

})();