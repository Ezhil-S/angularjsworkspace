var app4=angular.module('app4', []);

app4.controller('ctrl1',function($scope){

  $scope.user= [{
    fName: "Derek",
    lName: "Banas",
  }];

  $scope.saveUser = function(userInfo) {
    if($scope.userForm.$valid) {
      $scope.user.push({
        fName: userInfo.fName, lName: userInfo.lName, password: userInfo.password
      });
      console.log('User Saved');
    } else {
      console.log('Error : Couldn\'t Save User');
    }
 }

});
