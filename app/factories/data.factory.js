(function() {
    'use strict';

    angular
        .module('app')
        .factory('DataFactory', DataFactory);

    DataFactory.$inject = ['$http'];

    /* @ngInject */
    function DataFactory($http) {
        var service = {
            getTBD: getTBD
           
        };
        return service;

        ////////////////
        

        function getTBD() {
        	//return $http.get('http://www.omdbapi.com/?s=' + title + '&r=json&type=movie');
            return {}
        };

        /*function getMovieDetailData(title) {
           // return $http.get('http://www.omdbapi.com/?t=' + title + '&r=json&type=movie');
        }*/
    }
})();