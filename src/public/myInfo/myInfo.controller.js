(function () {
"use strict";

angular.module('public')
.controller('myInfoController', myInfoController);

myInfoController.$inject = ['RegistrationService','ApiPath'];
function myInfoController(RegistrationService,ApiPath) {
  var myInfoCtrl = this;


  myInfoCtrl.basePath = ApiPath; // Path data

  myInfoCtrl.user = RegistrationService.getInfosUser(); // Recup infos users
  
  if ($.isEmptyObject(myInfoCtrl.user)){
    myInfoCtrl.menuItem = {};
    myInfoCtrl.isLogin = false;

  }else{
    myInfoCtrl.menuItem = myInfoCtrl.user.items;
    myInfoCtrl.isLogin = true;
  }
}
})();
