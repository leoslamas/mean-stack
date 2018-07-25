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

### Testing

Init Karma
>`karma init config/karma.config.js`