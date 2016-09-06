(function() {
    'use strict';

    angular
        .module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['StudentsFactory', 'ProjectsFactory', 'AssignmentsFactory', '$stateParams'];

    /* @ngInject */
    function DashboardController(StudentsFactory, ProjectsFactory, AssignmentsFactory, $stateParams) {
        var vm = this;
        vm.title = 'DashboardController';
        vm.test = 'this is a test from DashboardController';
        vm.students = [];
        vm.projects = [];
        vm.assignments = [];

        function syncControllerToApi() {
            StudentsFactory.getStudents().then(
                function(response) {
                    vm.students = response.data;
                }
            );
            ProjectsFactory.getProjects().then(
                function(response) {
                    vm.projects = response.data;
                }
            );
            AssignmentsFactory.getAssignments().then(
                function(response) {
                    vm.assignments = response.data;
                }
            );
        }

        syncControllerToApi();
        


        
        
        
        activate();

        ////////////////

        function activate() {
        }
    }
})();