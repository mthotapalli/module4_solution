(function () {

'use strict'

angular.module('data')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'src/templates/home.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/main_categories.html',
      controller: 'MenuAppController as mainList',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('itemDetail', {
      url: '/itemDetail/{itemId}',
      templateUrl: 'src/templates/main_item.html',
      controller: 'MenuAppController as mainList',
      resolve: {
        items: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.itemId);

              }]
      }
    });
  }

})();
