var app3=angular.module('app3', []);

app3.controller('ctrl1',function($scope){

  $scope.alphabets= [
    {item: "A", no: 1},
    {item: "B", no: 2},
    {item: "C", no: 3},
    {item: "D", no: 4},
    {item: "E", no: 5}
  ];

$scope.addItem= function(newItem,value){
    if(!(newItem === undefined || newItem === "")){
    $scope.alphabets.push({
      item : newItem,
       no : value
    });
    $scope.missingNewItemError = "";
  }
  else {
      $scope.missingNewItemError = "Please enter an item";
  }
};

});
