'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'firebase',  // get firebase instance
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    // $routeProvider.otherwise({redirectTo: '/view1'});
    $routeProvider.otherwise({
        redirectTo: '/home' // go to home address: http://localhost:8000/#!/home
    });
}]);
