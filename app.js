var codeSplitter = angular.module('codeSplitter', ['ngRoute']);

codeSplitter.config(function ($routeProvider) {
    $routeProvider
    
        .when('/', {
            templateUrl: 'pages/add.html',
            controller: 'mainController'
        })
        .when('/add', {
            templateUrl: 'pages/add.html',
            controller: 'addController'
        })
        .when('/projects', {
            templateUrl: 'pages/projects.html',
            controller: 'projectsController'
        })
        .when('/contacts', {
            templateUrl: 'pages/contacts.html',
            controller: 'contactsController'
        })
});

codeSplitter.controller('mainController', ['$scope', '$log', function ($scope, $log) {


}]);
codeSplitter.controller('addController', ['$scope', '$log', function ($scope, $log) {
    console.log("Hej");

}]);
codeSplitter.controller('projectsController', ['$scope', '$log', function ($scope, $log) {


}]);
codeSplitter.controller('contactsController', ['$scope', '$log', function ($scope, $log) {


}]);