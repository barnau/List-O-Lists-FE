(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentsController', StudentsController);

    StudentsController.$inject = ['StudentsFactory', '$stateParams'];

    /* @ngInject */
    function StudentsController(StudentsFactory, $stateParams) {
        var vm = this;
        vm.title = 'StudentsController';
        vm.test = 'this is a test from StudentsController';
        vm.students = [];

        function syncLocalToAPI() {
            StudentsFactory.getStudents().then(
                function(response) {
                    vm.students = response.data;
                }
            );
        }

        syncLocalToAPI();

       activate();

        ////////////////

        function activate() {
        }
    }
})();