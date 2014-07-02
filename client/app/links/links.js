  angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
  $scope.data = {};
  $scope.getLinks = function(){
    $http({
      method:'GET',
      url: '/api/links'
    })
    .then(function(response){
      var dataFromServer = response.data;
      $scope.data.links = dataFromServer;
    })
    .catch(function(error){
      console.log(error);
    });
  };
  $scope.getLinks();
});
