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
    clientSearch(search); //!!!!!!!!!!!!testfunction
    console.log('you searched for ' + search);
    $http.get('/rebrickable/search/' + search).then(function(res) {
      console.log(res);
    });
  }

  //!!!!!!!!!!testfunction
  function clientSearch(search) {
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
  //!!!!!!!!!
// callback - Optional JSONP callback function name
// type - Filter on only S=Sets, M=MOCs, P=Parts.
// theme1 - Set Filter: Theme Level 1
// theme2 - Set Filter: Theme Level 2
// theme3 - Set Filter: Theme Level 3
// min_pieces - Set Filter: List sets with >= this number of parts.
// max_pieces - Set Filter: List sets with <= this number of parts.
// min_year - Set Filter: List sets released >= this year.
// max_year - Set Filter: List sets released <= this year.
// part_type_id - Part Filter: Only list parts with this type/category ID.
// part_color - Part Filter: Only list parts that appear in this color.

  function postIdea(thisIdea) {
    var idea = thisIdea;
    $http.post('/idea/', idea).then(function(res) {
      console.log(res);
    });
  }

}]);
