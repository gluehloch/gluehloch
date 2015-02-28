var gluehlochApp = angular.module('gluehloch', ['ngRoute']);

/*
 * *** FACTORY ***

   TODO Wie verdrahte ich die URLs?
   TODO  Momementan wird nur success() behandelt. Wie sieht es mit error() aus?

 */

/*
 * *** CONTROLLER ***
 */

gluehlochApp.controller('IndexCtrl', ['$scope', function($scope) {
}]);

gluehlochApp.controller('PomCtrl', ['$scope', function($scope) {
}]);

gluehlochApp.controller('AWToolsCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
}]);

gluehlochApp.controller('MiscCtrl', ['$scope', '$location', function($scope, $location) {
}]);

gluehlochApp.controller('HeaderCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}]);

/*
 * *** ROUTING ***
 */

gluehlochApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'IndexCtrl',
                templateUrl: 'intro.html'
            })
        .when('/pom',
            {
                controller: 'PomCtrl',
                templateUrl: 'pom.html'
            })
        .when('/awtools',
            {
                controller: 'AWToolsCtrl',
                templateUrl: 'awtools.html'
            })
        .when('/awtools-homegen',
            {
                controller: 'AWToolsCtrl',
                templateUrl: 'awtools.html'
            })
        /*
        .when('/betoffice',
            {
                controller: 'BetofficeCtrl',
                templateUrl: 'betoffice.html'
            })
        .when('/betoffice-web',
            {
                controller: 'BetofficeWebCtrl',
                templateUrl: 'betofficeweb.html'
            })
        */
        .when('/misc',
            {
                controller: 'MiscCtrl',
                templateUrl: 'misc.html'
            })
        .otherwise({ redirectTo: '/' });
}]);