(function() {
    'use strict';

    angular
        .module('app')
        .factory('ProjectsFactory', ProjectsFactory);

    ProjectsFactory.$inject = ['$http'];

    /* @ngInject */
    function ProjectsFactory($http) {
        var service = {
            getProjects: getProjects
        };
        return service;

        ////////////////

        function getProjects() {
        	return $http.get('http://localhost:53122/api/projects');
            
        };
    }
})();