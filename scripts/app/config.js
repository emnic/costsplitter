(function () {
    'use strict';

    angular
        .module('costSplitter')
        .config(config)
        .run(run);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state("home", {
                url: '/home',
                templateUrl: 'templates/home.html'
            })
            .state("projects", {
                url: '/projects',
                templateUrl: 'templates/projects.html'
            })
            .state("add", {
                url: '/add',
                templateUrl: 'templates/add.html'
            })
            .state("contacts", {
                url: '/contacts',
                templateUrl: 'templates/contacts.html'
            });
    }

    run.$inject = ['$rootScope', '$state', '$stateParams'];

    function run($rootScope, $state, $stateParams) {
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toStateParams, fromState, fromStateParams) {
                $rootScope.fromState = fromState;
                $rootScope.fromStateParams = fromStateParams;
                $rootScope.toState = toState;
                $rootScope.toStateParams = toStateParams;
            });

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    };
})();