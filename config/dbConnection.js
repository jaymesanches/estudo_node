var mysql = require('mysql');

var connMySQL = function(){
	console.log('Conexao com bd foi estabelecida');
	return mysql.createConnection({
		host : 'localhost',
		user : 'node_user',
		password : 'node_password',
		database : 'portal_noticias'
	});
}

module.exports = function () {
	console.log('O autoload carregou o módulo de conexão com bd');
	return connMySQL;
}