
var app= angular.module('app',[])
app.controller('control1',function($scope,$http, $timeout){

$http.get("http://localhost:3000/messages").then(function(result){
$scope.messages=[];
$scope.obj={};
for(var i=0;i<result.data.length;i++){
 $scope.obj["name"]=result.data[i].user;
 $scope.obj["message"]=result.data[i].content;
 $scope.obj["date"] = new Date();
 $scope.messages.push($scope.obj);
 $scope.obj={};
}
});
$scope.sendmessage=function(nmessage,date){
 $scope.text={
   "channelId":3101,
   "date":date,
   "user":"ezhil",
   "type":"text",
   "content":nmessage
 }
 $http({ method: "POST", url: "http://localhost:3000/messages", data: $scope.text, cache: false });
}
});
$timeout(function() {
 var scroller = document.getElementById("autoscroll");
 scroller.scrollTop = scroller.scrollHeight;
}, 0, false);

// $scope.sendmessage  = function()
// {
//       $scope.message.push({'user':$scope.nmessage,
//                             'date':$scope.date});
//       var msgdata ={ user :$scope.nmessage,
//                             date:$scope.date };
// var res= $http.post("http://localhost:3000/messages", msgdata);
// res.success(function(data, status, headers, config) {
//     $scope.message = data;
//   });
//   res.error(function(data, status, headers, config) {
//     alert( "failure message: " + JSON.stringify({data: data}));
//   });
//   $scope.nmessage='';
//   $scope.date='';
// };
// });
