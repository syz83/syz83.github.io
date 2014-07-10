(function(angular){
    "use strict";

    var app = angular.module('Nola');

    app.config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider
            .otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html'
            })
            .state('splash', {
                url: '/splash',
                templateUrl: 'views/splash.html'
            })
            .state('swag', {
                url: '/crew',
                templateUrl: 'views/crew.html'
            })
            .state('swag', {
                url: '/itinerary',
                templateUrl: 'views/itinerary.html'
            })

    });
})(window.angular);