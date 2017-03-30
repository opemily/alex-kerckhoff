(function() {
  'use strict';

  angular
    .module('alex')
    .service('PlaceService', function ($resource, GOOGLE_API) {
      var self = this;

    var PlaceResource = $resource('https://maps.googleapis.com/maps/api/place/textsearch/json', {key: GOOGLE_API});

    self.getPlaceInfo = function(address) {

      return PlaceResource.get({query: address}).$promise;
    };

    });
})();