(function () {
    'use strict';

    angular
        .module('costSplitter')
        .controller('addExpenseController', addExpenseController);

    addExpenseController.$inject = ['resolvedExpenses'];

    function addExpenseController(resolvedExpenses) {
        /* jshint validthis:true */
        var vm = this;
        vm.expenses = resolvedExpenses;
        vm.expense = { currency: 'kr'}

        activate();

        function activate() { }
    }
})();
