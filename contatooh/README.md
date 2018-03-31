### Getting Started

From contatooh/:

`npm install`

`node server`

or:

`nodemon server`
(npm install nodemon -g)

### Database

1 - Install MongoDB
2 - Start `mongod(.exe)`
3 - Run `mongo`
>`use contatooh`
>`var contato = { "nome" : "Nome do Contato" }`
>`db.contatos.insert(contato)`
>`db.contatos.find()`
