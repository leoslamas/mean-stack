angular.module('contatooh').controller('ContatoController', function($scope, $routeParams, $resource) {
    console.log($routeParams.contatoId);

    var Contato = $resource('/contatos/:id');
    if ($routeParams.contatoId) {
        Contato.get({ id: $routeParams.contatoId },
            function (contato) {
                $scope.contato = contato;
            },
            function (erro) {
                $scope.mensagem = {
                    texto: 'Contato não existe. Novo contato.'
                };
            }
        );
    } else {
        $scope.contato = {};
    }
    
});