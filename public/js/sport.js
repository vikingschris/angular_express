angular.module("myApp").controller("sportCtrl", sportCtrl);

sportCtrl.$inject = ["$http"];
function sportCtrl($http) {
    var self = this;

    self.initSport = function () {
        $http({
            url: "/api/sports",
            method: "GET"
        }).then(function (response) {
            self.sports = response.data;
        });
    }
}