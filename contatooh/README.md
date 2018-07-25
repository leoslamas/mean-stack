### Getting Started

From contatooh/:

`npm install`

`node server`

or:

`nodemon server`
(npm install nodemon -g)

### Database

> Install MongoDB

> Start `mongod(.exe)`

> Run `mongo`

>`use contatooh`

>`var contato = { "nome" : "Nome do Contato" }`

>`db.contatos.insert(contato)`

>`db.contatos.find()`

### Building

>`grunt`
(npm install -g grunt-cli@0.1)

### Testing

Init Karma
>`karma init config/karma.config.js`
(npm install -g karma-cli)

Run tests
>`karma start config/karma.config.js`