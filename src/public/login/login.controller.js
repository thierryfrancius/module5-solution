(function () {
"use strict";

angular.module('public')
.controller('LoginController', LoginController);

LoginController.$inject = ['MenuService','RegistrationService','menuCategories'];

function LoginController(MenuService,RegistrationService,menuCategories) {

  var loginCtrl = this;

  //console.log('Entrer dans loginController');
    loginCtrl.menuCategories = menuCategories; // Recup infos categories
    loginCtrl.user = {}; //Objet contenant les infos users
    loginCtrl.message = '';

    // Fonction recherchant les categories puis les menu_items
    // en fonction du favori..

    loginCtrl.favDish = function(dishShortName){
      //console.log('dish name: ',dishShortName[0]);
      loginCtrl.formOk = false;
      loginCtrl.menuCategories.forEach(function(element) {

        if(element.short_name == dishShortName[0]){

          var promise = MenuService.getMenuItem(loginCtrl.user.favoriteDish);
          promise
          .then(function(response){

            if (response.length == 0){
                loginCtrl.formOk = false;
            }else{
              loginCtrl.formOk = true;
              loginCtrl.user.items = response;
            }

          })
          .catch(function(error){
            loginCtrl.completed = false;
            console.log('erreur http: ',error);
          });
        }
      });
    }

    loginCtrl.completed = false; // Formulaire incomplet

  // Fonction soumettant le formulaire
    loginCtrl.submit = function () {
         // get menu-items selected by user
         loginCtrl.completed = true;
         loginCtrl.message = "Your information has been saved";
         RegistrationService.addInfosUser(loginCtrl.user); //Stockage infos

   };
}


})();
