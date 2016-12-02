(function () {
    'use strict';

    angular
    .module('alex')
    .controller('NavbarController', function ($state) {
        var self = this;
        
        self.routes = $state.get();
        self.routes.splice(0,1);

    });
})();