angular.module("myApp").factory("SportEntry",["$resource", function ($resource) {
   return $resource('/resource/api/:team', {
       team: "@team"
   })
}]);