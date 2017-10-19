/**
 * Created by ∞◊»„»„ on 2017/10/18.
 */
app.controller('shoppingController',['$scope','shoppingServer',function($scope,shoppingServer){
    shoppingServer.getProducts('get','http://localhost:8080/api').then(function(res){
        $scope.products=res;
        console.log($scope.products)
    })
    $scope.flag = false;

}])