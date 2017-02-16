(function(){
  'use strict'
  angular.module('data').service('MenuDataService',MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http){
    var dataService = this;

    dataService.getAllCategories = function(){
      return $http({
          url: ("https://davids-restaurant.herokuapp.com/categories.json")
      }).then(function(response){
          return response.data;
      });
    };

    dataService.getItemsForCategory = function(categoryShortName){
        return $http({
          url:("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)
        }).then(function(response){
          return response.data.menu_items;
        });
    };

  }
})();
