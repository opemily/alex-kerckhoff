
(function() {
  'use strict';

  angular
    .module('alex')
    .controller('BioController', function (contentful) {
      var self = this;

      //Get Biography Text

      contentful.entry('owEuQa1WRE2Ka8qeS4Gym').then(function(response){
        self.bioText = response.data.fields.biographyText;
      });

      //Get Biography Image

      contentful.asset('9aHwbMusRUCGkuqcCISiK').then(function(response){
        self.bioImage = response.data.fields.file.url;
        self.altText = response.data.fields.title;
      })


    });

})();