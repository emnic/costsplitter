(function () {
    'use strict';

    angular
        .module('costSplitter')
        .controller('addExpenseController', addExpenseController);

    addExpenseController.$inject = ['resolvedExpenses'];

    function addExpenseController(resolvedExpenses) {
        /* jshint validthis:true */
        var vm = this;
        vm.createNewProject = createNewProject;
        vm.expense = { currency: 'kr' }
        vm.expenses = resolvedExpenses;
        vm.projects = [{ name: 'Ibiza', id: 1 }, { name: 'Fjällen', id: 2 }, { name: 'Svensexa', id: 3 }];

        activate();

        function activate() { }

        function createNewProject() {
            var newProject = {};
            newProject.id = vm.projects[vm.projects.length - 1].id + 1;
            newProject.name = vm.newProjectName;
            vm.projects.push(newProject);
            vm.expense.project = newProject;
            vm.newProjectName = '';
        }
    }
})();
