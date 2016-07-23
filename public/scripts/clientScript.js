'use strict';

var app = angular.module('legoApp', []);

app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

app.controller('mainController', ['$scope','$http', '$window',
function($scope, $http, $window) {

  var pie = 1;
  console.log('pie', pie);
  $scope.hi = 'hello from angular';
  $scope.add = function() {
    pie++;
    console.log('pie', pie);
    return;
  }

}]);
