(function() {
  'use strict';

  angular
    .module('alex')
    .config(function(contentfulProvider, CONTENTFUL_API){
      contentfulProvider.setOptions({
        space: CONTENTFUL_API.space,
        accessToken: CONTENTFUL_API.accessToken
      })
    })

})();
