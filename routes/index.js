var config = require('../config');
var express = require('express');
var router = express.Router();
var firebird = require('node-firebird');

var options = {};

options.host = config.host;
options.port = config.port;
options.database = config.database;
options.user = config.user;
options.password = config.password;
options.role = config.role
options.pageSize = config.pageSize; 

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

function generator(result, projeto, classe, tabela){
	var sql = "";
	var cabecalho = "";
	var pk = "";

	for (var i = 0; i < result.length; i++) {
		if (result[i][2]) {
			if ( result[i][2].substr(0, 2).toLowerCase() == "rh" ) {
				var cla = result[i][2].substr(2, result[i][2].length).trim().toLowerCase();
				sql += '&emsp; <span class="code-yellow">@JoinColumn</span>(name = <span class="code-green">"'+result[i][0].trim().toLowerCase()+'"</span>)</br>'+
					"&emsp; <span class='code-orange'>private</span> " + cla.capitalizeFirstLetter() + " <span class='code-purple'>" + cla.trim().toLowerCase() + "</span>;</br>";
			}else{
				sql += '&emsp; <span class="code-yellow">@JoinColumn</span>(name = <span class="code-green">"'+result[i][2].trim().toLowerCase()+'"</span>)</br>'+
					"&emsp; <span class='code-orange'>private</span> " + result[i][2].capitalizeFirstLetter().trim() + " <span class='code-purple'>" + result[i][0].trim().toLowerCase() + "</span>;</br>";
			}
		}else{
			sql += "&emsp; <span class='code-orange'>private</span> " + result[i][1].trim() + " <span class='code-purple'>" +result[i][0].trim().toLowerCase() + "</span>;</br>";
		}

		if (result[i][4]) {
			if (!result[i][3]) {
				pk += '<span class="code-yellow">@PrimaryKeys</span>(<span class="code-green">"'+ result[i][0].trim().toLowerCase() +'"</span>)</br>';	
		  	}
		}

	}
	sql += "}"

	cabecalho = '<span class="code-orange">package</span> br.com.'+projeto+'.model;</br></br>'+
		  '<span class="code-orange">import</span> br.com.fiscobase.persistence.Table;</br>'+
	      '<span class="code-orange">import</span> lombok.Data;</br></br>'+
		  '<span class="code-yellow">@Data</span></br>'+
		  '<span class="code-yellow">@Table</span>(<span class="code-green">"'+tabela.toLowerCase()+'"</span>)</br>'+
		  pk +
		  '<span class="code-orange">public class</span> '+classe+' {</br>';

	return cabecalho + sql;
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

	    	/*    var code = "SELECT R.RDB$FIELD_NAME, "+
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
            " LEFT JOIN RDB$DEPENDENCIES DE ON F.RDB$FIELD_NAME = DE.RDB$FIELD_NAME " +
            " WHERE R.RDB$RELATION_NAME='"+(req.query.tabela).toUpperCase()+"' " +
            " ORDER BY R.RDB$FIELD_POSITION ";
    */

         var code = "SELECT      RRF.RDB$FIELD_NAME AS CAMPO, "+
		            "CASE "+
		             " RTP.RDB$TYPE_NAME "+
		               " WHEN 'VARYING'  THEN  'String' "+
		               " WHEN 'LONG'     THEN  'Integer' "+
		               " WHEN 'SHORT'    THEN  'Integer' "+
		               " WHEN 'DOUBLE'   THEN  'Double' "+
		               " WHEN 'FLOAT'    THEN  'Double' "+
		              "  WHEN 'INT64'    THEN  'Float' "+
		              "  WHEN 'TEXT'     THEN  'String' "+
		             "   WHEN 'BLOB'     THEN  'String' "+
		               " WHEN 'DATE'     THEN  'Date' "+
		               " WHEN 'TIME'     THEN  'Date' "+
		               " ELSE RTP.RDB$TYPE_NAME "+
		            "END TIPO_CAMPO, "+
		           " RRC.RDB$RELATION_NAME AS  TABELA_CHAVE, "+
		           " RIS2.RDB$FIELD_NAME   AS  CAMPO_CHAVE, "+
		           " RRC.rdb$constraint_type "+
		"FROM        RDB$RELATION_FIELDS   RRF "+
		"INNER JOIN  RDB$FIELDS            RFL     ON    RFL.RDB$FIELD_NAME = RRF.RDB$FIELD_SOURCE "+
		"INNER JOIN  RDB$TYPES             RTP     ON    RTP.RDB$TYPE = RFL.RDB$FIELD_TYPE AND "+
		                                 "               RTP.RDB$FIELD_NAME = 'RDB$FIELD_TYPE' "+
		"LEFT JOIN   RDB$INDEX_SEGMENTS    RIS     ON    RIS.RDB$FIELD_NAME = RRF.RDB$FIELD_NAME AND "+
		                                                "EXISTS (  SELECT      FIRST 1 1 "+
		                                                         " FROM        RDB$INDICES   IND "+
		                                                         " INNER JOIN  RDB$REF_CONSTRAINTS   RFC   ON    RFC.RDB$CONSTRAINT_NAME = IND.RDB$INDEX_NAME "+
		                                                        "  WHERE       IND.RDB$INDEX_NAME = RIS.RDB$INDEX_NAME AND "+
		                                                    "                  IND.RDB$RELATION_NAME = RRF.RDB$RELATION_NAME) "+
		"LEFT JOIN   RDB$REF_CONSTRAINTS   RFC     ON    RFC.RDB$CONSTRAINT_NAME = RIS.RDB$INDEX_NAME "+
		"LEFT JOIN   RDB$INDEX_SEGMENTS    RIS2    ON    RIS2.RDB$INDEX_NAME = RFC.RDB$CONST_NAME_UQ AND "+
		"                                                RIS2.RDB$FIELD_POSITION = RIS.RDB$FIELD_POSITION "+
		"LEFT  JOIN  RDB$RELATION_CONSTRAINTS RRC  ON    RFC.RDB$CONST_NAME_UQ = RRC.RDB$CONSTRAINT_NAME AND "+
		"                                                RRC.RDB$CONSTRAINT_TYPE = 'PRIMARY KEY' "+
		"WHERE       RRF.RDB$RELATION_NAME NOT STARTING WITH 'RDB$' "+
		"AND RRF.RDB$RELATION_NAME='"+(req.query.tabela).toUpperCase()+"' " +
        " ORDER BY RRF.RDB$FIELD_POSITION ";

	   db.execute(code, function(err, result) {
	   		var sql = generator(result, req.query.projeto, req.query.classe, req.query.tabela);
	   		res.send(sql);
	        db.detach();
	    })
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
