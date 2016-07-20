var app6=angular.module('app6',[]);
//scopeless controller
// app6.controller('ctrl1',function($scope){
//   this.name="Animal";
//   this.sound="Grr";
//
//   this.animalClick = function(){
//     alert(this.name + " says " + this.sound );
//   };
// });


// app6.controller('ctrl2',function($controller){
//   var childCtrl = this;
//   childCtrl.child = $controller('ctrl1', {});
//   childCtrl.child.name = "Dog";
//   childCtrl.child.bark = "Woww";
//   childCtrl.child.dogClick = function(){
//     alert(this.name + " says " + this.sound + " and " + this.bark);
//   };
// });

app6.controller('ctrl1', function() {
  this.name = "Animal";
  this.sound = "Grrrrr";

  this.animalClick = function(){
    alert(this.name + " says " + this.sound);
  };

});

app6.controller('ctrl2', function($controller) {
  var childCtrl = this;
  childCtrl.child = $controller('ctrl1', {});
  childCtrl.child.name = "Dog";
  childCtrl.child.bark = "Wooof";
  childCtrl.child.dogData = function(){
     alert(this.name + " says " + this.sound + " and " + this.bark);
  }
});
