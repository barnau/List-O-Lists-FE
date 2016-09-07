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
            .state('students.grid', {
                url: '/grid',
                templateUrl: '/app/templates/studentsGrid.html',
                controller: 'StudentsController as studs'
            })
            .state('students.detail', {
                url: '/detail',
                templateUrl: '/app/templates/studentDetails.html',
                controller: 'StudentDetailsController as studDetails'

            })

            .state('projects', {
                url: '/projects',
                templateUrl: '/app/templates/projects.html',
                controller: 'ProjectsController as proj'
            });

        });

})();