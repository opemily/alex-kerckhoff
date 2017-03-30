(function() {
  'use strict';

  angular
    .module('alex')
    .directive('navbarRoute', function () {
     return {
      restrict: 'EA',
      templateUrl: 'app/navbar/partials/navbar-route.partial.html',
      controller: 'NavbarController as ctrl',
      bindToController: true
    };
  });

})();