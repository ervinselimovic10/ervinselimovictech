// Module
var app = angular.module('eApp', ['ngRoute', 'ngAnimate', 'ngSanitize']);

// Routes
app.config(['$routeProvider', '$locationProvider', function(routeProvider, locationProvider) {
  routeProvider
    .when('/', {
      templateUrl: 'views/frontpage.html',
    })
    .when('/about', {
      templateUrl: 'views/about.html'
    })
    .when('/competencies', {
      templateUrl: 'views/competencies.html',
      controller: 'SearchController'
    })
    .when('/references', {
      templateUrl: 'views/references.html'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html'
    })
    .otherwise({
      redirectTo: '/'
    });

    locationProvider.html5Mode(true);
    locationProvider.hashPrefix('!');
}]);

