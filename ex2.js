var app2=angular.module('app2',[]);
app2.controller('ctrl1',function($scope)
{
  $scope.randomnum1 = Math.floor((Math.random() * 10) + 1);
  $scope.randomnum2 = Math.floor((Math.random() * 10) + 1);
});

app2.controller('ctrl2',function($scope)
{
  $scope.alphabets= [
    {item: "A", no: 1},
    {item: "B", no: 2},
    {item: "C", no: 3},
    {item: "D", no: 4},
    {item: "E", no: 5}
];

$scope.getList = function(){
  return $scope.showList ? "ullist.html" : "ollist.html"
};
});
