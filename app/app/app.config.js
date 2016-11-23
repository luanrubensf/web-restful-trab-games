(function () {

    'use strict';

    angular.module('app')
        .config(['$routeProvider',

            function ($routeProvider) {
                $routeProvider.when('/', {
                    templateUrl: 'src/home.html',
                })
                    .when('/categoria', {
                        templateUrl: 'src/categoria/categoria.html',
                        controller: 'app.CategoriaController',
                        controllerAs: 'vm'
                    })
                    .when('/game', {
                        templateUrl: 'src/game/game.html',
                        controller: 'app.GameController',
                        controllerAs: 'vm'
                    });

                $routeProvider.otherwise({
                    redirectTo: '/'
                });

            }])
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.defaults.useXDomain = true;
           // $httpProvider.defaults.headers.common = 'Content-Type: application/json';
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }]);

})();