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

  $scope.submitIdea = function() {
    var legoIdea = {};
    legoIdea.type = $scope.submitType;
    legoIdea.title = $scope.submitTitle;
    legoIdea.url = $scope.submitUrl;
    console.log(legoIdea);

    if (legoIdea.type && legoIdea.title && legoIdea.url) {
      //console.log(legoIdea);
    } else {
      console.log('bro did you type all the fields in even?');
    }
    return;
  }
}]);
