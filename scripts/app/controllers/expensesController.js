(function () {
    'use strict';

    angular
        .module('costSplitter')
        .controller('expensesController', expensesController);

    expensesController.$inject = ['resolvedExpenses'];

    function expensesController(resolvedExpenses) {
        /* jshint validthis:true */
        var vm = this;
        vm.expenses = resolvedExpenses;
        activate();

        function activate() { }
    }
})();
