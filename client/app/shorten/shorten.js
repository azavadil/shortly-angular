angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  // Your code here
  $scope.link = {};
  $scope.loading = false;

  $scope.addLink = function(){
    $scope.loading = true;
    $http.post('/api/links', $scope.link )
    .then(function(response){
      $scope.loading = false;
      $location.path('/index');
    })
    .catch(function(error){
      console.log(error);
    });
  };
});
