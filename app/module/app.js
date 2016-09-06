(function() {
    'use strict';

    angular
        .module('app', ['ui.router', 'toastr'])

        .config(function($stateProvider, $urlRouterProvider){
        	$urlRouterProvider.otherwise('/dash');

        	$stateProvider
        	.state('dash', {
        		url: '/dash',
        		templateUrl: '/app/templates/dashboard.html',
        		controller: 'DashboardController as dash'
        	})
        	.state('students', {
        		url: '/students',
        		templateUrl: '/app/templates/students.html',
        		controller: 'StudentsController as studs'
        	})

            .state('projects', {
                url: '/projects',
                templateUrl: '/app/templates/projects.html',
                controller: 'ProjectsController as proj'
            });

        });

})();