(function () {
"use strict";

angular.module('common')
.service('RegistrationService', RegistrationService);

// Service de stockage des infos users
function RegistrationService() {
  var service = this;

  service.user = {};

  service.addInfosUser = function(user){
    service.user = user;
  };
  service.getInfosUser = function(){
    return service.user;

  };
}

})();
