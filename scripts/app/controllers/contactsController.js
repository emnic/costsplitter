(function () {
    'use strict';

    angular
        .module('costSplitter')
        .controller('contactsController', contactsController);

    contactsController.$inject = [];

    function contactsController() {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();