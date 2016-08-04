var config = require('../config');
var express = require('express');
var router = express.Router();
var firebird = require('node-firebird');
var sql = "";
var options = {};

options.host = config.host;
options.port = config.port;
options.database = config.database;
options.user = config.user;
options.password = config.password;
options.role = config.role
options.pageSize = config.pageSize; 

function generator(result, projeto, classe, tabela){
	sql = '<span class="code-orange">package</span> br.com.'+projeto+'.model;</br></br>'+
		  '<span class="code-orange">import</span> br.com.fiscobase.persistence.Table;</br>'+
	      '<span class="code-orange">import</span> lombok.Data;</br></br>'+
		  '<span class="code-yellow">@Data</span></br>'+
		  '<span class="code-yellow">@Table</span>(<span class="code-green">"'+tabela.toLowerCase()+'"</span>)</br>'+
		  '<span class="code-orange">public class</span> '+classe+' {</br>'
	for (var i = 0; i < result.length; i++) {
		sql += "&emsp; <span class='code-orange'>private</span> " + result[i][1].trim() + " <span class='code-purple'>" +result[i][0].trim().toLowerCase() + "</span>;</br>";
	}
	sql += "}"
}

router.route('/')
  .get(function(req, res) {
  	res.render('index', { title: 'Model Generator', options: options});
  })

router.route('/gerar')
  .get(function(req, res) {
  	firebird.attach(options, function(err, db) {

	    if (err)
	        throw err;

	    var code = "SELECT R.RDB$FIELD_NAME, "+
	    	" CASE F.RDB$FIELD_TYPE " +
	            " WHEN 7 THEN 'Integer' " +
	            " WHEN 8 THEN 'Integer' " +
	            " WHEN 10 THEN 'Float' " +
	            " WHEN 11 THEN 'Float' " +
	            " WHEN 12 THEN 'Date' " +
	            " WHEN 13 THEN 'Date' " +
	            " WHEN 14 THEN 'String' " +
	            " WHEN 16 THEN 'Integer' " +
	            " WHEN 27 THEN 'Double' " +
	            " WHEN 35 THEN 'Date' " +
	            " WHEN 37 THEN 'String' " +
	            " WHEN 40 THEN 'String' " +
	            " WHEN 261 THEN 'String' " +
	            " ELSE 'UNKNOWN' " +
	        " END AS Tipo_Campo " +
            " FROM RDB$RELATION_FIELDS R " +
            " LEFT JOIN RDB$FIELDS F ON R.RDB$FIELD_SOURCE = F.RDB$FIELD_NAME " +
            " WHERE R.RDB$RELATION_NAME='"+(req.query.tabela).toUpperCase()+"' " +
            " ORDER BY R.RDB$FIELD_POSITION ";

	   	db.execute(code, function(err, result) {
	   		generator(result, req.query.projeto, req.query.classe, req.query.tabela);
	   		res.send(sql);
	        db.detach();
	    });
	});
  })

router.route('/config')
	.get(function(req, res) {
		var fs = require('fs');
		var exports = 
			"module.exports = config ="+  
			"	{"+
			"		host: '"+ req.query.host + "', "+
			"		port: '"+ req.query.port + "', "+
			"		database: '"+ req.query.database +"', "+
			"		user: '"+ req.query.user +"', " +
			"		password: '"+ req.query.password +"', " +
			"		role: null, " +
			"		pageSize: '"+ req.query.pageSize + "'"+
			"	}";


		fs.writeFile("config.js", exports, function(err) {
		    if(err) {
		        console.log(err);
		    } else {
		    	res.sendStatus(200);
		        console.log("The file was saved!");
		    }
		}); 
	})

module.exports = router;
