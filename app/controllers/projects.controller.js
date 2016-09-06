(function() {
    'use strict';

    angular
        .module('app')
        .controller('ProjectsController', ProjectsController);

    ProjectsController.$inject = ['ProjectsFactory', '$stateParams'];

    /* @ngInject */
    function ProjectsController(ProjectsFactory, $stateParams) {
        var vm = this;
        vm.title = 'ProjectsController';
        vm.test = 'this is a test from ProjectsController'
        vm.projects = [];

        function syncLocalToApi() {
            ProjectsFactory.getProjects().then(
                function(response) {
                    vm.projects = response.data;
                }
            );
        }

        syncLocalToApi();

        activate();

        ////////////////

        function activate() {
        }
    }
})();