(function(){

	"use strict";

	angular.module("myApp").config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/home/busca");

		$stateProvider

		.state("home", {
			url:"/home",
			templateUrl:"views/home.html",
			abstract:true,
			controller:"initCtrl"
		})

		.state("home.busca", {
			url:"/busca",
			views:{
				'menuContent':{
					templateUrl:"views/busca.html"
				}
			}
		})
		
		.state("home.resultado", {
			url:"/resultado",
			views:{
				'menuContent':{
					templateUrl:"views/resultado.html"
				}
			}
		});

	});

})();