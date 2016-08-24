var config                             = require('../config');
var generatorHTML                      = require('../util/hmtl');
var generatorJava                      = require('../util/java');
var generatorService                   = require('../util/service');
var generatorController                = require('../util/controller');
var generatorArchive                   = require('../util/archive');
var generatorList                      = require('../util/list');
var fs                                 = require('fs');
var express                            = require('express');
var router                             = express.Router();
var firebird                           = require('node-firebird');
var zipFolder                          = require('zip-folder');
var fsUtils                            = require("nodejs-fs-utils");

var options                            = {};

options.host                           = config.host;
options.port                           = config.port;
options.database                       = config.database;
options.user                           = config.user;
options.password                       = config.password;
options.role                           = config.role
options.pageSize                       = config.pageSize;

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

router.route('/')
    .get(function(req, res) {
        res.render('index', {
            title: 'Model Generator',
            options: options
        });
    })

router.route('/gerar')
    .get(function(req, res) {
        firebird.attach(options, function(err, db) {
            if (err) throw err;
            var tabela                 = req.query.tabela;
            var projeto                = req.query.projeto;
            var classe                 = req.query.classe;
            var sql                    =
                " SELECT DISTINCT" +
                " C.TABELA, C.COLUNA, C.DESCCOMP, " +
                " C.DESCRED, C.DESCTEC, C.HINT, " +
                " C.TIPO, C.INTEIRAS, C.DECIMAIS, " +
                " C.ITENSCB, C.MASCARA, C.VALMIN, " +
                " C.VALMAX, C.VALPADRAO, C.TABREL, " +
                " C.INDREL, C.CHAVEREL, C.EXPRET, " +
                " C.OBRIGATORIO, C.GUIA, I.CHAVE " +
                " FROM PCOLUNAS C " +
                " LEFT JOIN PINDICES I ON " +
                " (C.TABELA = I.TABELA) " +
                " WHERE C.TABELA = '" + tabela.toUpperCase() + "' ORDER BY C.SEQUENCIA";

            db.execute(sql, function(err, result) {
                if (err) {
                    console.log(err);
                    res.send(err);
                } else {
                    classe             = classe.capitalizeFirstLetter().trim();

                    fs.mkdirSync(classe);
                    var java           = generatorJava.generator(result, projeto, classe, tabela);
                    var controller     = generatorController.generator(projeto, classe);
                    var html           = generatorHTML.generator(result, projeto, classe, tabela);
                    var htmlLista      = generatorList.generator(result, projeto, classe);
                    var service        = generatorService.service(projeto, classe);
                    var serviceImpl    = generatorService.serviceImpl(projeto, classe);

                    var wro            =
                        '<group name="' + projeto.toLowerCase() + '_' + classe.toLowerCase() + '">\n' +
                        '   <js>/resources/scripts/' + projeto.toLowerCase() + '/' + classe.toLowerCase() + '/ajax.js</js>\n' +
                        '   <js>/resources/scripts/' + projeto.toLowerCase() + '/' + classe.toLowerCase() + '/' + classe.toLowerCase() + '.js</js>\n' +
                        '</group>';

                    var header         =
                        '<li><a href="${appUrl}/secured/cadastros/' + classe.toLowerCase() + '">' + classe + '</a></li>'

                    generatorArchive.generator(classe + "/wro.xml", wro);
                    generatorArchive.generator(classe + "/header.jsp", header);
                    generatorArchive.generator(classe + "/" + classe + ".java", java);
                    generatorArchive.generator(classe + "/" + classe + "Controller.java", controller);
                    generatorArchive.generator(classe + "/" + classe + "Service.java", service);
                    generatorArchive.generator(classe + "/" + classe + "ServiceImpl.java", serviceImpl);
                    generatorArchive.generator(classe + "/modal" + classe.capitalizeFirstLetter() + ".jsp", html);
                    generatorArchive.generator(classe + "/" + classe.toLowerCase() + ".jsp", htmlLista);

                    zipFolder(classe, 'public/' + classe + '.zip', function(err) {
                        if (err) {
                            console.log('Ah não! Algo de errado não deu certo!', err);
                        } else {
                            setTimeout(function(){
                              console.log('Boa meu garoto!');
                              fsUtils.rmdirsSync(classe);
                            }, 10);
                          }
                    });
                    res.send(java);
                    db.detach();
                }
            })
        });
    })

router.route('/config')
    .get(function(req, res) {
        var fs                         = require('fs');
        var exports                    =
            "module.exports = config =" +
            "  {" +
            "    host: '" + req.query.host + "', " +
            "    port: '" + req.query.port + "', " +
            "    database: '" + req.query.database + "', " +
            "    user: '" + req.query.user + "', " +
            "    password: '" + req.query.password + "', " +
            "    role: null, " +
            "    pageSize: '" + req.query.pageSize + "'" +
            "  }";

        if (generetorArchive.generator("config.js", exports))
            res.sendStatus(200);
        else
            res.sendStatus(500);

    });

module.exports                         = router;
