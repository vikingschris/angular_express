angular.module("myApp", ["ngResource", "ui.router"])
    .config(function ($resourceProvider, $stateProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;

        $stateProvider
            .state('/', {
                url: '/',
                template: "<h1>hello index</h1>"
            })
            .state('resource', {
                url: "/resource/api/:sport",
                controller: "apiCtrl",
                templateUrl: "views/rest-api.html"
            })
            .state("test", {
                url: "/test",
                templateUrl: "views/test-view.html",
                controller: "testCtrl"
            })
            .state("sport", {
                url: "/sport",
                templateUrl: "views/sport-list.html",
                controller: "sportCtrl"
            })
            .state("teamDetails", {
                url: "/sport/:team/:id",
                templateUrl: "views/sport-view.html",
                controller: "sportViewCtrl"
            })
    });