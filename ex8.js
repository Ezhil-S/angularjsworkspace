var app8 = angular.module('app8',[]);
app8.directive('jqlDirective',function(){
  return function(scope , element, attrs)
  {
    var players= element.children();
    var listOfPlayers = "";
    for(i=0;i< players.length; i++)
    {
      if(players.eq(i).text() == "Barry bonds")
      {
        players.eq(i).css("color" , "red");
        players.eq(i).attr("number" , "20");
      }

      if(players.eq(i).text() == "Hank Aaron")
      {

        players.eq(i).attr("number" , "100");
      }

      listOfPlayers += players.eq(i).text() + ",";
      angular.element(document.querySelector('#childrenList')).text(listOfPlayers);
}
      var barrysNum = angular.element(document.querySelector("#barry")).attr("number");
      angular.element(document.querySelector("#barrysNumber")).text(barrysNum);

      var hankNum = angular.element(document.querySelector('#hank')).attr("number");
      angular.element(document.querySelector("#hanksNumber")).text(hankNum);

      angular.element(document.querySelector("#hank")).removeClass("thick");

      var isHankBold = angular.element(document.querySelector('#hank')).hasClass("thick");
      angular.element(document.querySelector("#hankBold")).text(isHankBold);

      var barrysId= angular.element(document.querySelector('#barry')).prop("id");
      angular.element(document.querySelector("#barryID")).text(barrysId);
    //}
  }
})
app8.controller('ctrl1',function($scope){

$scope.unBold = function(){
  angular.element(document.querySelector('#hank')).toggleClass("thick");
}

});
