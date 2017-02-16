(function () {
'use strict';

angular.module('data')
.controller('MenuAppController', MenuAppController);


MenuAppController.$inject = ['items'];
function MenuAppController(items) {
  
  var mainList = this;
  mainList.items = items;
}

})();
