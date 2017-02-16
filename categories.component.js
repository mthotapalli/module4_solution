(function(){
  'use strict'
console.log("----------------------");
  angular.module('data')
  .component('categories', {
    templateUrl: 'src/categories.template.html',
    bindings: {
      items: '<'
    }
  });
});
