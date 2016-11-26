(function() {
  'use strict';

  angular
    .module('alex')
    .controller('HomeController', function () {
      var self = this;

      self.greeting = "Hello World";
    });

})();
