/**
 * Created by ∞◊»„»„ on 2017/10/18.
 */
app.directive('shop',function(){
    return{
        templateUrl:'App/View/temp/_shopping.html',
        scope:{
            item:'=item',
            index:"@index"
        },
        controller:'shoppingController'
    }
})