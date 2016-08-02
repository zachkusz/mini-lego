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

  $scope.search = function(search) {
    setIdSearch(search); //!!!!!!!!!!!!testfunction
    console.log('you searched for ' + search);
    $http.get('/rebrickable/search/' + search).then(function(res) {
      console.log(res);
    });
  }

  function setIdSearch(search) {
    $http({
      method: 'get',
      url: 'https://rebrickable.com/api/search',
      params: {
        key: 'HA5BBnZJvF',
        format: 'json',
        query: search,
        min_pieces: 8,
        max_pieces: 5000
      }
    }).then(function(res) {
      if (res.data.results) {
        $scope.searchResults = res.data.results;
      } else {
        $scope.searchResults = res.data;
      }
      console.log($scope.searchResults);
    });
  }

  function postIdea(thisIdea) {
    var idea = thisIdea;
    $http.post('/idea/', idea).then(function(res) {
      console.log(res);
    });
  }

  $scope.searchByName = function(search) {
    $http.get('/rebrickable/searchByName/' + search).then(function(res){
      console.log(res);
    });
  }

  //94qE-3s9L-00lU   http://brickset.com/api/v2.asmx
  //converts xml to json
  //  var x2js = new X2JS();
  //  var jsonObj = x2js.xml_str2json( response.data );

}]);
