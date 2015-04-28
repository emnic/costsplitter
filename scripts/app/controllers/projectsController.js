(function () {
    'use strict';

    angular
        .module('costSplitter')
        .controller('projectsController', projectsController);

    projectsController.$inject = ['resolvedExpenses'];

    function projectsController(resolvedExpenses) {
        /* jshint validthis:true */
        var vm = this;
        vm.expenses = resolvedExpenses;
        activate();

        function activate() { }
    }
})();
