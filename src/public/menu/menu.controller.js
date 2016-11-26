(function () {
"use strict";

angular.module('public')
.controller('MenuController', MenuController);
MenuController.$inject = ['menuCategories'];
function MenuController(menuCategories) {
//function MenuController() {
  var $ctrl = this;
  $ctrl.menuCategories = menuCategories;
}


})();
