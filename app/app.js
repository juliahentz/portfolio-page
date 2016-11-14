angular.module('app', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('app', {

        url:'/',
        abstract:true,
        views:{
            header:{
                templateUrl:'partial/header/header.html',
                controller:'HeaderCtrl'
            }
        }
    });

    $stateProvider.state('app.home', {
        url: '',
        views:{
            'main@': {
                templateUrl: 'partial/home/home.html',
                controller: 'HomeCtrl'
            }
        }
    });
    $stateProvider.state('app.projects', {
        url: 'projects',
        views:{
            'main@': {
                templateUrl: 'partial/projects/projects.html',
                controller: 'ProjectsCtrl'
            }
        }

    });
    $stateProvider.state('app.about', {
        url: 'about',
        views: {
            'main@': {
                templateUrl: 'partial/about/about.html',
                controller: 'AboutCtrl'
            }
        }

    });
    $stateProvider.state('app.contact', {
        url: 'contact',
        views:{
            'main@': {
                templateUrl: 'partial/contact/contact.html',
                controller: 'ContactCtrl'
            }
        }
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});

angular.module('app').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
