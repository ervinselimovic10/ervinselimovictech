// Module
var app = angular.module('eApp', ['ngRoute', 'ngAnimate', 'ngSanitize']);


app
// Routes
.config(['$routeProvider', function(routeProvider) {
  routeProvider
    .when('/', {
      templateUrl: 'views/competency.html',
      controller: 'SearchController'
    })
    .when('/aboutme', {
      templateUrl: 'views/aboutme.html'
    })
    .when('/story', {
      templateUrl: 'views/furtherread.html'
    })
    .when('/end', {
      templateUrl: 'views/endread.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}])

// Controllers
.controller('SearchController', ['$scope', function(scope) {
    scope.maxlength = 10;

    scope.arrData = [
      {'tech': 'html', 'desc': '<i class="fa fa-check"></i>'}, 
      {'tech': 'css', 'desc': 'bootstrap'}, 
      {'tech': 'photoshop', 'desc': '<i class="fa fa-check"></i>'},
      {'tech': 'seo', 'desc': '<i class="fa fa-check"></i>'},
      {'tech': 'php', 'desc': 'laravel or separate components /--packagist.org'},
      {'tech': 'tests', 'desc': 'phpunit'},
      {'tech': 'javascript', 'desc': 'jquery, angular.js'},
      {'tech': 'server', 'desc': 'ubuntu 14.04'},
      {'tech': 'devtools', 'desc': 'git with github, composer, bower, gulp, sass'},
      {'tech': 'primary os', 'desc': 'macintosh'},
      {'tech': 'vm', 'desc': 'vagrant /--ubuntu--homestead'},
      {'tech': 'terminal', 'desc': '<i class="fa fa-check"></i>'},
      {'tech': 'other tools', 'desc': 'nginx, apache2, sqlite, postgresql, mariadb, redis'},
      {'tech': 'pattern', 'desc': 'oop->mvc'},
      {'tech': 'close', 'desc': 'python, ruby, node.js'},
      {'tech': 'interests', 'desc': 'node.js'},
      {'tech': 'books', 'desc': 'the dip (godin), think like a programmer (spraul), program or be programmed (rushkoff)'},
      {'tech': 'references', 'desc': '<ul><li><a href="https://mojsnep.eu">Mojsnep host-provider</a></li><li><a href="https://asstoritve.info/">As storitve d.o.o.</a></li><li><a href="https://ervinselimovic.com/">ES CMS/Blog</a></li><li><a href="#">?</a></li></ul>'},
      {'tech': 'fb groups', 'desc': '<ul><li><a href="https://www.facebook.com/mojsnepeu/">Mojsnep</a></li><li><a href="https://www.facebook.com/asstoritve/">As storitve d.o.o.</a></li></ul>'}
    ];
}]);

