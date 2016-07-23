'use strict';

app.factory('mainFactory', ['$http', '$window',
function($http, $window) {

  var user = 'hello from the other side';

  var factory = {
      // getUser: function() {
      //   return getUser();
      // },
      // logout: function() {
      //   return logout();
      // },
      user: user
      // getArtists: function() {
      //   return getArtists();
      // }
    };
    return factory;

}]);
