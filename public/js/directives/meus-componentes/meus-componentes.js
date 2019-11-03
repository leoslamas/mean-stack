angular.module('meusComponentes', [])
    .directive('meuPainel', function () {
        var directive = {};

        directive.restrict = "EA";

        directive.scope = {
            titulo: '@' //valor igual a chave 'titulo' pode ser omitido
        };

        directive.template =
        '<div class="panel panel-default">' +
        '  <div class="panel-heading">' +
        '    <h3 class="panel-title">{{titulo}}</h3>' +
        ' </div>' +
        '  <div class="panel-body">' +
        ' </div>' +
        '</div>';

        return directive;
    });