(function(){
	"use strict";

	angular.module("myApp").controller("initCtrl", function($scope, $ionicPopup){
		$scope.busca = "Curso";
		$scope.resultado = "Aviso";
		
		$scope.avisoAluno = function(aviso){
                  
            };
		
		$scope.cursos = ["Ciência da Computação","Redes de computadores","Seguraça da Informação","Gestão da tec. da Informação"];
		
		$scope.turnos = ["Manhã","Noite"];
		
		$scope.periodos = ["1º Período","2º Período","3º Período","4º Período","5º Período","6º Período","7º Período","8º Período"];
		
		$scope.avisos = [
            {
                curso:"Ciência da Computação",
				turno:"Manhã",
				periodo:"6º Período",
				disciplina:"Banco de Dados II",
				lab:"LAB 6",
				horario:"8:00"
				
            },
            
            {
                curso:"Ciência da Computação",
				turno:"Noite",
				periodo:"6º Período",
				disciplina:"Banco de Dados II",
				lab:"LAB 5",
				horario:"19:00"
            },
			
			{
                curso:"Redes de Computadores",
				turno:"Manhã",
				periodo:"1º Período",
				disciplina:"Introdução a Redes",
				lab:"LAB 4",
				horario:"8:00"
				
            },
            
            {
                curso:"Segurança da informação",
				turno:"Noite",
				periodo:"2º Período",
				disciplina:"Introdução a SI",
				lab:"LAB 3",
				horario:"19:00"
            },
            
        ];
       
    });
    
})();