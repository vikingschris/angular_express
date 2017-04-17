angular.module("myApp").controller("apiCtrl", apiCtrl);

apiCtrl.$inject = ["SportEntry", "$stateParams"];
function apiCtrl(SportEntry, $stateParams) {
    var self = this;
    self.isArray = angular.isArray;
    var entry = SportEntry.get({
        team: $stateParams.sport
    }, function (data) {
        self.api = data;
    });
}