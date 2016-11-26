(function () {
    'use strict';

    angular
    .module('alex')
    .controller('NavbarCtrl', function ($state) {
        var self = this;
        
        self.routes = $state.get();
        self.routes.splice(0,1);

    });
})();