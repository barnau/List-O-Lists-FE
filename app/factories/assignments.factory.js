(function() {
    'use strict';

    angular
        .module('app')
        .factory('AssignmentsFactory', AssignmentsFactory);

    AssignmentsFactory.$inject = ['$http'];

    /* @ngInject */
    function AssignmentsFactory($http) {
        var service = {
            getAssignments: getAssignments
        };
        return service;

        ////////////////

        function getAssignments() {
        	return $http.get('http://localhost:53122/api/Assignments');
        }
    }
})();