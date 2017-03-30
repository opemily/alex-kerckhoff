(function() {
  'use strict';

  angular
    .module('alex')
    .directive('eventItem', function () {
     return {
      restrict: 'EA',
      templateUrl: 'app/shows/partials/event.partial.html',
      controller: 'ShowsController as ctrl',
      bindToController: true
    };
  });

})();