(function() {
  'use strict';

  angular
    .module('alex')
    .directive('navbar', function () {
     return {
      restrict: 'E',
      templateUrl: 'app/navbar/partials/navbar.partial.html',
      controller: 'NavbarController as ctrl',
      bindToController: true,
      scope: true
    };
  });

})();
