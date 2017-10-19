/**
 * Created by ∞◊»„»„ on 2017/10/18.
 */
var app = angular.module('app',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('shop',{
            url:'/shopping',
            templateUrl:'App/View/shopping.html'
        })
    $urlRouterProvider.otherwise('/shopping')
})
