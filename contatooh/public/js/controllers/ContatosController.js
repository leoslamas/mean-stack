angular.module('contatooh').controller('ContatosController', function ($scope, Contato) {
    $scope.contatos = [];
    $scope.filtro = '';
    $scope.mensagem = { texto: '' };

    /*$http.get('/contatos')
        .success(function (data) {
            $scope.contatos = data;
        })
        .error(function (statusText) {
            console.log("Não foi possível obter a lista de contatos");
            console.log(statusText);
    });*/

    function buscaContatos() {
        Contato.query(
            function (contatos) {
                $scope.contatos = contatos;
            },
            function (erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível obter a lista'
                };
                console.log(erro);
            }
        );
    }
    buscaContatos();

    $scope.remove = function (contato) {
        Contato.delete({ id: contato._id },
            buscaContatos,
            function (erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível remover o contato'
                };
                console.log(erro);
            }
        );
    };

});
