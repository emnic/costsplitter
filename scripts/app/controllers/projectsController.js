(function () {
    'use strict';

    angular
        .module('costSplitter')
        .controller('projectsController', projectsController);

    projectsController.$inject = [];

    function projectsController() {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();
