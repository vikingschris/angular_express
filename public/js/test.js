angular.module("myApp").controller("testCtrl", testCtrl);

testCtrl.$inject = ["$http","$stateParams"];

function testCtrl($http, $stateParams) {
    var self = this;
    self.stack = {
        acronym: "mean",
        name: "mongodb express angular node"
    };
    self.testAjax = function () {
        $http({
            url: "/api/test_backend",
            method: "GET"
        }).then(function (response) {
            console.log("response: " + response.data);
        });
    };

    console.log($stateParams);
}