(function () {
    'use strict';

    angular
        .module('costSplitter')
        .controller('homeController', homeController);

    homeController.$inject = [];

    function homeController() {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();
