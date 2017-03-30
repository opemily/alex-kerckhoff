(function() {
  'use strict';

  angular
    .module('alex')
    .controller('ShowsController', function (GetEventsService, PlaceService, $scope, $log, $q) {
      var self = this;

      // Set Calendar to current Day at midnight
      self.today = new Date();
      self.today.setHours(0,0,0);

      

      // Get Events from Google Calendar API

      GetEventsService.getEvents(self.today).then(function(response){

        self.events = response.items;
        self.getPlaceInfo(self.events);
        self.eventList = angular.copy(self.events);
        self.setArrayLengthTo6(self.eventList);

      }, function(error){
        $log.log(error);
      });

      // Get Geolocation Data from Places API & Add to Event

      self.getPlaceInfo = function(array){
        for(let i = 0; i < array.length; i++){
           let event = array[i];
            PlaceService.getPlaceInfo(event.location).then(function(response){
                 array[i].locationData = response.results[0];
            }, function (error){
              $log.log(error);
            });
        }
      };

    
      // Updates Listed Events Starting From the Date Selected on Datepicker
      self.setEventList = function (selectedDate){

        // Resets Event List 
        if(self.eventList.length > 0) {

          self.eventList.length = 0;
        }

        // Pushes Events from Selected Date in eventList Array
        for(var i = 0; i < self.events.length; i++){

            var eventDate = moment(self.events[i].start.dateTime)._d;

            if (eventDate >= selectedDate) {
            
              self.eventList.push(self.events[i]); 
            }
        }

        // Toggles No Upcoming Events div 
        if(self.eventList.length > 0) {
          self.noUpcomingEvents = false;
          self.setArrayLengthTo6(self.eventList);
        } else {
          self.noUpcomingEvents = true;
        }

        return self.eventList;
      }

      // Sets the Maximum Events Listed to 6
      self.setArrayLengthTo6 = function(array){
        if(array.length > 6) {
          array.length = 6;
        } 
      }
     
      // Checks if Change in Selected Date of DatePicker
      $scope.$watch(function(){return self.today}, function(newVal, oldVal){
          if(newVal !== oldVal){
            self.setEventList(newVal); 
          }  
      }, true);
     
    });
})();