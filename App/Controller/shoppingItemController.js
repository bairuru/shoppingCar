/**
 * Created by ∞◊»„»„ on 2017/10/18.
 */
app.controller('shoppingItemController',function($scope){
    $scope.deleteItem = function (index) {
        $scope.$emit("deleteItem", index);
    };
    $scope.itemChecked = function (index) {
        $scope.$emit("itemChange", index);
    };


})