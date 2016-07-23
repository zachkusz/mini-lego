'use strict';

var app = angular.module('legoApp', []);

//changes the angular symbols from {{}} to {[{}]} so it will play nice with handlebars
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

app.controller('mainController', ['$scope','$http', '$window', 'mainFactory',
function($scope, $http, $window, mainFactory) {

  var pie = 1;

  $scope.message = mainFactory.user;
  console.log('pie', pie);

  $scope.hi = 'hello from angular';

  $scope.add = function() {
    pie++;
    console.log('pie', pie);
    return;
  }

}]);
