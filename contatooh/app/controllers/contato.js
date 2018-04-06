module.exports = function(app) {
	var controller = {};
	var Contato = app.models.contato;
	
	controller.listaContatos = function(req, res) {
		Contato.find().exec()
			.then(
				function (contatos) {
					res.json(contatos);
				},
				function (erro) {
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.obtemContato = function(req, res) {
		
	};

	controller.removeContato = function(req, res) {
		
	};

	controller.salvaContato = function (req, res) {
		
	};

	function adiciona(contatoNovo) {
		
	}

	function atualiza(contatoAlterar) {
		
	}

	return controller;
}