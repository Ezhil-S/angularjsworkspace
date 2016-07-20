var app5 =angular.module('app5',[]);

app5.controller('ctrl1',function($scope, $rootScope){
  $scope.text= [
    {
      name:"aaa"
    },
    {
      name:"bbb"
    }
  ];

  $scope.getName = function(){
    search($scope.name);
  };

  function search(name){
    $scope.data="Not found";
    for(var i=0; i< $scope.text.length; i++)
    {
      if($scope.text[i].name === name)
      {
        $scope.data = $scope.text[i].name + " is found";
      }
    }
  }
  $scope.$on("Updated",function(event,args)
  {
    // console.log("Name: "+args.name);
  $scope.text.push({
    name : args.name
  });
});
$scope.addName= function(name){
    $rootScope.$broadcast("Updated",{
      name: name
    });
  //  console.log("Name : " +name);
  };
});
