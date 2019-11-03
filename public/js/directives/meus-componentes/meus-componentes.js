angular.module('meusComponentes', [])
    .directive('meuPainel', function () {
        var directive = {};

        directive.restrict = "EA";

        directive.scope = {
            titulo: '@' //valor igual a chave 'titulo' pode ser omitido
        };

        directive.transclude = true;

        directive.templateUrl = 'js/directives/meus-componentes/meu-painel.html';

        return directive;
    });