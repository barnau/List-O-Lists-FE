(function() {
    'use strict';

    angular
        .module('app')
        .factory('StudentsFactory', StudentsFactory);

    StudentsFactory.$inject = ['$http'];

    /* @ngInject */
    function StudentsFactory($http) {
        var service = {
            getStudents: getStudents
           
        };
        return service;

        ////////////////
        

        function getStudents() {
        	return $http.get('http://localhost:53122/api/students');
            
        };

        /*function getMovieDetailData(title) {
           // return $http.get('http://www.omdbapi.com/?t=' + title + '&r=json&type=movie');
        }*/
    }
})();