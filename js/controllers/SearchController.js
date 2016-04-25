app.controller('SearchController', ['$scope', function(scope) {
    scope.maxlength = 10;

    scope.arrData = [
      {'tech': 'html', 'desc': '<i class="fa fa-check"></i>'}, 
      {'tech': 'css', 'desc': 'bootstrap'}, 
      {'tech': 'photoshop', 'desc': '<i class="fa fa-check"></i>'},
      {'tech': 'seo', 'desc': '<i class="fa fa-check"></i>'},
      {'tech': 'php', 'desc': 'laravel or separate components /--packagist.org'},
      {'tech': 'tests', 'desc': 'phpunit'},
      {'tech': 'javascript', 'desc': 'jquery, angular.js'},
      {'tech': 'cms', 'desc': 'wordpress'},
      {'tech': 'server', 'desc': 'ubuntu 14.04'},
      {'tech': 'devtools', 'desc': 'git with github, composer, bower, gulp, sass'},
      {'tech': 'primary os', 'desc': 'macintosh'},
      {'tech': 'vm', 'desc': 'vagrant /--ubuntu--homestead'},
      {'tech': 'terminal', 'desc': '<i class="fa fa-check"></i>'},
      {'tech': 'other tools', 'desc': 'nginx, apache2, sqlite, postgresql, mariadb, redis'},
      {'tech': 'pattern', 'desc': 'oop->mvc'},
      {'tech': 'close', 'desc': 'node.js'},
      {'tech': 'interests', 'desc': 'MEAN stack'},
      {'tech': 'books', 'desc': 'the dip (godin), think like a programmer (spraul), program or be programmed (rushkoff)'}
    ];
}]);