var app1=angular.module('app1',[]);

app1.controller('ctrl1', function ($scope, $http){
  $http.get("http://localhost:3000/usersInChannels")
  .then(function mySucces(response) {
          $scope.member = response.data;
        },
        function myError(response){
          $scope.member = response.statusText;
      });
  $scope.addMember  = function()
  {
        $scope.member.push({'name':$scope.newMember});
        var user ={ name : $scope.newMember};
  var res= $http.post("http://localhost:3000/usersInChannels", user);
  res.success(function(data, status, headers, config) {
			$scope.message = data;
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});
    $scope.newMember='';
	};
});
