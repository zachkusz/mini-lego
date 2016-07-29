'use strict';

var app = angular.module('legoApp', []);

//changes the angular symbols from {{}} to {[{}]} so it will play nice with handlebars
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

app.controller('mainController', ['$scope','$http', '$window', 'mainFactory',
function($scope, $http, $window, mainFactory) {

  $scope.submitIdeaClick = function() {
    var legoIdea = {};
    legoIdea.type = $scope.submitType;
    legoIdea.title = $scope.submitTitle;
    legoIdea.url = $scope.submitUrl;
    console.log('click');

    if (legoIdea.type && legoIdea.title && legoIdea.url) {
      console.log('yes!');
      postIdea(legoIdea);
    } else {
      console.log('bro did you type all the fields in even?');
    }
    return;
  }

  function postIdea(thisIdea) {
    var idea = thisIdea;
    $http.post('/idea/', idea).then(function(res) {
      console.log(res);
    });
  }

}]);
