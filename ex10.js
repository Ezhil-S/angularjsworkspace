var app10 = angular.module('app10',[]);

app10.directive('exDirective',function(){

   return{
     transclude: true,
     template: "<div ng-transclude></div>"
   }
});

app10.controller('ctrl1',function($scope){
// $scope.heading="Heading";
});
