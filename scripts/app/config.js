(function () {
    'use strict';

    angular
        .module('costSplitter')
        .config(config)
        .run(run);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home/expenses');
        $stateProvider
            .state("home", {
                'abstract': true,
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'homeController',
                resolve: { resolvedExpenses: expensesResolver },
                controllerAs: 'vm'
            })
            .state("home.expenses", {
                url: '/expenses',
                templateUrl: 'templates/expenses.html',
                controller: 'expensesController',
                controllerAs: 'vm'
            })
            .state("home.add", {
                url: '/add',
                templateUrl: 'templates/add.html',
                controller: 'addExpenseController',
                controllerAs: 'vm'
            })
            .state("contacts", {
                url: '/contacts',
                templateUrl: 'templates/contacts.html'
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