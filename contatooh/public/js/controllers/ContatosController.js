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

    $scope.contatos = [
        {
            "_id": 1,
            "nome": "Contato Angular 1",
            "email": "cont1@empresa.com.br"
        },
        {
            "_id": 2,
            "nome": "Contato Angular 2",
            "email": "cont2@empresa.com.br"
        },
        {
            "_id": 3,
            "nome": "Contato Angular 3",
            "email": "cont3@empresa.com.br"
        }
    ];
});
