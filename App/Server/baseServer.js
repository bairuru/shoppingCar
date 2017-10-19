/**
 * Created by °×ÈãÈã on 2017/10/18.
 */
app.factory('baseServer',function($http,$q){
    var factory = {
        ajax:function(type,url,data){
            var defer = $q.defer();
            if(type == 'JSONP'){
                $.ajax({
                    url:url,
                    dataType:'jsonp',
                    success:function(data){
                        defer.resolve(data)
                    },error:function(err){
                        defer.reject(err)
                    }
                })
                return defer.promise
            }else{
                $http({
                    url:url
                }).success(function(data){
                    defer.resolve(data)
                }).error(function(err){
                    defer.error(err)
                })
            }
            return defer.promise
        }
    }
    return factory;
})