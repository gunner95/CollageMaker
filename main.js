var app = angular.module('photoApi',[]);
app.controller('picController',function($scope){

  $scope.imageUrl="";
  $(function () {
      $(":file").change(function () {
          if (this.files && this.files[0]) {
              var reader = new FileReader();
              reader.onload = imageIsLoaded;
              reader.readAsDataURL(this.files[0]);
          }
      });

  });


var canvas = this.__canvas = new fabric.Canvas('c');
fabric.Object.prototype.transparentCorners = false;
var radius = 300;

window.onkeydown = onKeyDownHandler;

function onKeyDownHandler(e) {
   switch (e.keyCode) {
      case 46: // delete
         var activeObject = canvas.getActiveObject();
         canvas.remove(activeObject);
         return;
   }
};

var urlArray=[];
  function imageIsLoaded(e) {
      var index;
      for(index=0;index<4;index++){
        if(!($('#myImg-'+index).attr('src'))){
      $('#myImg-'+index).attr('src', e.target.result);
      urlArray.push(e.target.result);
      break;
    }
      }

      $scope.$apply(function(){
        $scope.imageUrl=e.target.result;
      })
  };

$scope.toCanvas= function(id){
$scope.imageUrl=urlArray[id];
fabric.Image.fromURL($scope.imageUrl, function(img) {
  img.scale(0.1).set({
    left: 100,
    top: 100,
    angle: -15,
  });
  canvas.add(img).setActiveObject(img);
});

}

})
