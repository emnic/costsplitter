(function () {
    'use strict';

    angular
        .module('costSplitter')
        .config(config)
        .run(run);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state("home", {
                'abstract': true,
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'homeController',
                resolve: { resolvedExpenses: expensesResolver },
                controllerAs: 'vm'
            })
            .state("expenses", {
                url: '/expenses',
                templateUrl: 'templates/expenses.html',
                controller: 'expensesController',
                controllerAs: 'vm'
            })
            .state("add", {
                url: '/add',
                templateUrl: 'templates/add.html',
                controller: 'addExpenseController',
                controllerAs: 'vm'
            })
            .state("contacts", {
                url: '/contacts',
                templateUrl: 'templates/contacts.html',
                controller: 'contactsController',
                controllerAs: 'vm'
            })
            .state("projects", {
                url: '/projects',
                templateUrl: 'templates/projects.html',
                controller: 'projectsController',
                controllerAs: 'vm'
            });
    }

    function expensesResolver() {
        return [{ name: 'Mat', cost: 1500, project: { name: 'Ibiza', id: 1 }, currency: 'kr' }, { name: 'Bolaget', cost: 900, project: { name: 'Fjällen', id: 2 }, currency: 'kr' }];;
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