(function() {
  'use strict';

  angular
    .module('alex')
    .directive('navbar', function () {
     return {
      restrict: 'E',
      templateUrl: 'app/navbar/partials/navbar.partial.html',
      controller: 'NavbarCtrl as ctrl',
      bindToController: true
    };
  });

})();
