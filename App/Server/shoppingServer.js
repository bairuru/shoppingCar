/**
 * Created by °×ÈãÈã on 2017/10/18.
 */
app.factory('shoppingServer',['baseServer',function(baseServer){
    return{
        getProducts:function(type,url) {
            return baseServer.ajax(type,url)
        }
    }
}])