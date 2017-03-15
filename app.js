(function(){

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController)
LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope)
{
$scope.message="";
$scope.foodItem="";
$scope.lunchCheck=function(){
if($scope.foodItem!=''){
var arr=($scope.foodItem).split(',');
$scope.myStyle={color:"green"};
if(arr.length>3){
$scope.message="Too much!";
}
else
{
  $scope.message="Enjoy!";
}
}else
{
$scope.myStyle={color:"red"};
$scope.message="Please enter data first";
}
}
}
})();
