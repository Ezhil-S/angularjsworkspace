var app1=angular.module('app1',[]);

app1.controller('ctrl1',function($scope)
{
  $scope.first=1;
  $scope.second=1;
  $scope.updateValue=function()
  {
  $scope.calculate=$scope.first+ '+' +$scope.second+ '='
  +(+$scope.first + +$scope.second);
};
});

app1.controller('ctrl2',function($scope){
  $scope.blur = 0;
  $scope.focus= 0;
  $scope.copy = 0;
$scope.keydown = function(e)
{
  $scope.kdKey = String.fromCharCode(e.keyCode);
};
  $scope.mouseenter = 0;
  $scope.change = 0;

  $scope.disableButton = false;

  $scope.alphabets= [
    {item: "A", no: 1},
    {item: "B", no: 2},
    {item: "C", no: 3},
    {item: "D", no: 4},
    {item: "E", no: 5}
  ];
});
