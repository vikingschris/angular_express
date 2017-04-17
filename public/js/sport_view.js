angular.module("myApp").controller("sportViewCtrl", sportViewCtrl);

sportViewCtrl.$inject = ["$stateParams", "$http", "SportEntry"];
function sportViewCtrl($stateParams, $http, SportEntry) {
    var self = this;

    self.getInitSport = function () {
        $http({
            url: "api/view/sport",
            method: "POST",
            data: {
                team: $stateParams.team
            }
        }).then(function (response) {
            self.team = response.data[0];
        });
    };
}