angular.module('contatooh').controller('ContatosController', function($scope){
    $scope.total = 0; 

    $scope.incrementa = function(){
        $scope.total++;
    }

    //	Object
    $scope.contato	=	{
        nome:	'Flávio	Henrique',	
        sobrenome:	'Souza	Almeida'
    };
    //	boolean
    $scope.exibir	=	true;
    //	Number
    $scope.salario	=	100.12;
    //	Date
    $scope.admissao	=	new	Date();
});