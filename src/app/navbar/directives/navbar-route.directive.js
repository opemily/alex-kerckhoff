(function() {
  'use strict';

  angular
    .module('alex')
    .directive('navbarRoute', function () {
     return {
      restrict: 'A',
      templateUrl: 'app/navbar/partials/navbar-route.partial.html',
      controller: 'NavbarController as ctrl',
      bindToController: true
    };
  });

})();