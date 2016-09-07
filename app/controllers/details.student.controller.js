(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentDetailsController', StudentDetailsController);

    StudentDetailsController.$inject = ['StudentsFactory'];

    /* @ngInject */
    function StudentDetailsController(StudentsFactory) {
        var vm = this;
        vm.title = 'StudentDetailsController';
        vm.test = 'Hello from student details controller';

        activate();

        ////////////////

        function activate() {
        }
    }
})();