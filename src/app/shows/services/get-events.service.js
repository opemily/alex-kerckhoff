(function() {
  'use strict';

  angular
    .module('alex')
    .service('GetEventsService', function ($resource, GOOGLE_API) {
      var self = this;

    var eventsResource = $resource('https://www.googleapis.com/calendar/v3/calendars/3i85jd93fuui1n68du7jis7518%40group.calendar.google.com/events', {singleEvents: true, key: GOOGLE_API});

    self.getEvents = function(date) {
      var ISOdate = date.toISOString();

      return eventsResource.get({timeMin: ISOdate}).$promise;
    };

    });
})();