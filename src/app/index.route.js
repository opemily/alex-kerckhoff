(function() {
  'use strict';

  angular
    .module('alex')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/home/partials/home.partial.html',
          controller: 'HomeController as ctrl'
        })
        .state('bio', {
          url:'/bio',
          templateUrl: 'app/bio/partials/bio.partial.html',
          controller: 'BioController as ctrl'
        })
        .state('shows', {
          url:'/shows',
          templateUrl:'app/shows/partials/shows.partial.html',
          controller: 'ShowsController as ctrl'
        })
        .state('gallery', {
          url: '/gallery',
          templateUrl: 'app/gallery/partials/gallery.partial.html',
          controller: 'GalleryController as ctrl'
        })
        .state('listen', {
          url: '/listen',
          templateUrl: 'app/listen/partials/listen.partial.html',
          controller: 'ListenController as ctrl'
        })
        .state('contact', {
          url: '/contact',
          templateUrl: 'app/contact/partials/contact.partial.html',
          controller: 'ContactController as ctrl'
        });


      $urlRouterProvider.otherwise('/');
    })

})();
