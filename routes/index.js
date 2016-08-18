var config = require('../config');
var express = require('express');
var router = express.Router();
var firebird = require('node-firebird');
var fs = require('fs');

var options = {};

options.host = config.host;
options.port = config.port;
options.database = config.database;
options.user = config.user;
options.password = config.password;
options.role = config.role
options.pageSize = config.pageSize;

String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

function generetorHTML(result, projeto, classe, tabela) {
    classe = classe.capitalizeFirstLetter();
    var cabecalho =
        '<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>\n' +
        '<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>\n' +
        '<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>\n' +
        '<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>\n' +
        '<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>\n' +
        '<!-- MODAL CADASTRA ' + classe + ' -->\n' +
        '<div class="modal fade" id="modalCadastrar' + classe + '" role="dialog" aria-labelledby="exampleModalLabel"' +
        ' aria-hidden="true" data-keyboard="false" data-backdrop="static">\n' +
        '    <div class="modal-dialog modal-lg">\n' +
        '        <div class="modal-content">\n' +
        '            <div class="modal-header">\n' +
        '               <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span' +
        '                        aria-hidden="true">&times;</span></button>\n' +
        '                <h4 class="modal-title">Cadastrar ' + classe + '</h4>\n' +
        '            </div>\n' +
        '            <div class="modal-body">\n' +
        '				<form:form id="formCadastrar' + classe + '">\n' +
        '    				<div class="row">\n';
    var js =
        'var linha;' +
        'var ' + classe + ' = {' +
          'formCadastrar: $("#formCadastrar' + classe + '"),' +
          '$modal: $("#modalCadastrar' + classe + '"),' +

          'incluir: function () {' +
            classe + '.$modal.modal("show");' +
          '},' +

          'editar: function (id) {' +
            'ajax' + classe + '.carregar(id);' +
            classe + '.$modal.modal("show");' +
          '},' +

          'fecharModal: function () {' +
            classe + '.$modal.modal("hide");' +
          '},' +

          'excluir: function (id) {' +
            'modalConfirm("", "Deseja realmente excluir ' + classe + '?", "Sim", "Cancelar", function (result) {' +
              'if (result) {' +
                'ajax' + classe + '.excluir(id);' +
              '}' +
            '})' +
          '}' +
        '};' +

        '$(function () {' +
          '$("[data-toggle=' + 'tooltip' + ']").tooltip();' +
          'ajax' + classe + '.listar();';

    var ajax =
        'ajax' + classe + ' = {' +
          'cadastrar: function (linha) {' +
            '$.ajax({' +
              'url: appUrl + "/secured/cadastrosespecificos/' + classe.toLowerCase() + '/",' +
              'data: ' + classe + '.formCadastrar.serialize(),' +
              'type: "POST",' +
              'beforeSend: function () {' +
              'botaoLoad($("#btnCadastrar' +
                classe + '"));' +
              '},' +
              'success: function (response) {' +
                'var result = jQuery.parseJSON(response);' +
                'if (result.idfator > 0) {' +
                'var data = {' +
                  '"idfator": result.idfator,' +
                  '"descricao": result.descricao,' +
                  '"tecutil": result.tecutil' +
                '};' +
                'if (linha >= 0) {' +
                  '$("#dados' + classe + 'Table").bootstrapTable("updateRow", {index: linha, row: result});' +
                '} else {' +
                  '$("#dados' + classe + 'Table").bootstrapTable("append", result);' +
                '}' +
                'modalAlert("", "Salvo com sucesso!");' +
              '} else {' +
                'modalAlert("", "Erro ao salvar!");' +
              '}' +
              'botaoNormal($("#btnCadastrar' + classe + '"));' +
            '},' +
            'error: function (xhr, status, error) {' +
              'procError(error, $("#btnCadastrar' + classe + '"));' +
            '}' +
          '});' +
        '},' +
        'excluir: function (id) {' +
          '$.ajax({' +
            'url: appUrl + "/secured/cadastrosespecificos/' + classe.toLowerCase() + '/excluir/" + id,' +
            'type: "DELETE",' +
            'beforeSend: function () {' +
            'botaoLoad($("#btnCadastrar' +
              classe + '"));' +
            '},' +
            'success: function (response) {' +
              ' if (response > 0) {' +
                'modalAlert("", "' + classe + ' excluido com sucesso!");' +
                '$("#dados' + classe + 'Table").bootstrapTable("remove", {field: "idfator", values: [id]});' +
              '} else {' +
                'modalAlert("Erro ao excluir", "Este ' + classe + ' está vinculado a um registro");' +
              '}' +
              'botaoNormal($("#btnCadastrar' + classe + '"));' +
            '},' +
            'error: function (xhr, status, error) {' +
              'procError(error, $("#btnCadastrar' + classe + '"));' +
            '}' +
        ' });' +
        '},';

    var carregaAjax = "";
    for (var i = 0; i < result.length; i++) {
      var coluna = result[i][1].trim().toLowerCase();
      var descricaoCompleta = result[i][2];
      var descricaoTecnica = result[i][4];
      var hint  = result[i][5];
      var tipo = result[i][6];
      var inteiras = result[i][7];
      var decimais = result[i][8];
      //dividindo os itens
      if (result[i][9])
        var itemSelect = (result[i][9]).split(';');
      var mascara = result[i][10];
      var valorPadrao = result[i][13];

      //Verifica se a tabela possui as letras rh no inicio, para posteriormente serem usadas como classe, no java
      var tabelaRelacao = result[i][14];
      if (tabelaRelacao)
        if (tabelaRelacao.substr(0, 2).toLowerCase() == 'rh')
          tabelaRelacao = tabelaRelacao.substr(2, tabelaRelacao.length).capitalizeFirstLetter();
        else
          tabelaRelacao = tabelaRelacao.capitalizeFirstLetter();

      if (result[i][16])
        var chaveRelacao = result[i][16].toLowerCase();
      var obrigatorio = result[i][18];
      var guia = result[i][19];

      //separando as chaves primarias por virgula
      var chave = (result[i][20]).split(';');
      var chaves = undefined;

      if (coluna != 'estab') {
          var required = ' ';
          var bullet = ' ';
          var tamanho = 6;

          if (obrigatorio != 'N') {
              required = 'required';
              bullet = '<span class="campo-required">&bullet;</span>';
          } else {
              required = ' ';
              bullet = ' ';
          }

          //verifica se o campo atual, possui relação com alguma tabela,
          //se tiver, então é criado o autocomplete,
          //se não é verificado o tipo do campo e criado de acordo com o tipo (número, select, text e etc).
          if (tabelaRelacao != null) {
              cabecalho += '<!-- ' + coluna + ' -->\n' +
                  '<div class="col-lg-' + tamanho + ' col-md-' + tamanho + ' col-sm-6 col-xs-6">\n' +
                  '<label for="' + coluna + '" class="control-label">' + descricaoTecnica + bullet + ' </label>\n' +
                  ' <div class="input-group">\n' +
                  '   <select data-value="${empregado.pessoa.idpess}" ' + required + ' \n' +
                  '     data-text="${empregado.pessoa.nome}"\n' +
                  '     class="js-example-basic-single select form-control autoselect"\n' +
                  '     name="' + tabelaRelacao.toLowerCase()  +'" id="' + tabelaRelacao.toLowerCase() + '">\n' +
                  '   </select>\n' +
                  '   <span class="input-group-btn">\n' +
                  '     <button class="btn btn-default btnInputSearch" type="button"\n' +
                  '       onclick="' + classe + '.incluir'+chaveRelacao.capitalizeFirstLetter+'()">\n' +
                  '       <i class="glyphicon glyphicon-plus inputIcon"></i>\n' +
                  '     </button>\n' +
                  '   </span>\n' +
                  ' </div>\n' +
                  '</div>\n';
              js += 'autoCompleteSelect2("#' + coluna + '", "/secured/cadastrosgerais/autoComplete/' + tabelaRelacao + '");'
              carregaAjax += 'setTextSelect2("#' + coluna + '", data.' + coluna + '.idtecnica, data.' + coluna + '.descricao);';
          } else {
              cabecalho +=
                  '<!-- ' + coluna + ' -->\n' +
                  '<div class="col-lg-' + tamanho + ' col-md-' + tamanho + ' col-sm-12 col-xs-12">\n' +
                  '<label for="' + coluna + '" class="control-label">' + descricaoTecnica + ' ' + bullet + '</label>\n';
              switch (result[i][8]) {
                  case 'INTEIRO':
                      cabecalho +=
                          '<input type="text" name="' + coluna +
                          '" id="' + coluna + '" maxlength="' + inteiras +
                          '" class="form-control" placeholder="' + hint +
                          '" onkeypress="return somenteNumeros(event)"' +
                          ' value="${empregado.ctpsserie}" ' + required + '/>\n';
                      break;
                  case 'DATA':
                      cabecalho +=
                          '<div class="input-group date" id="' + coluna + 'Div">' +
                          '<input type="text" id="' + coluna +
                          '" name="' + coluna +
                          '" ' + required + ' class="form-control value="<fmt:formatDate value="${empregado.dtadmissao}" pattern="dd/MM/yyyy"/>"' +
                          ' placeholder="' + hint + '" required>' +
                          '<span class="input-group-addon">' +
                          ' <span class="glyphicon glyphicon-calendar"></span>' +
                          '</span>' +
                          '</div>';
                      js +=
                          '$("#' + coluna + 'Div").datetimepicker({locale: "pt", format: "DD/MM/YYYY"});'
                      '$("#' + coluna + '").mask("99/99/9999", {placeholder: "__/__/____"});'
                      break;
                  case 'CHARCOMBO':
                      cabecalho +=
                          '<select class="form-control" id="' + coluna +
                          '" name="' + coluna + '"' + required + '">';
                      //inserindo as opções no select
                      Object.key(itemSelect).forEach(function(data){
                        //pega o valor padrão, caso não esteja marcado
                        var valor = itemSelect[data].substr(0, inteiras);
                        //verifica se o valor gerado é igual ao valor padrão
                        //se for adiciona a opção selecionado
                        if (valorPadrao == valor)
                          cabecalho += '<option value="' + valor + '" selected>' + valorPadrao + '</option>';
                        else
                          cabecalho += '<option value="' + valor + '">' + valorPadrao + '</option>';
                      });
                      cabecalho += '</select>';
                      break;
                  default:
                      cabecalho +=
                          '<input type="text" class="form-control" id="' + coluna + '"' +
                          'placeholder="' + hint + '"' +
                          'name="' + coluna + '" ' + required + ' maxlength="'+inteiras+'" />';
                      break;
              }
              cabecalho += '</div>\n';
          }
      }
  }
  cabecalho +=
      '     			</div>\n' +
      '				</form:form>\n' +
      '			</div>\n' +
      '            <div class="modal-footer">\n' +
      '                <button type="button" class="btn btn-default" data-dismiss="modal">\n' +
      '                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Cancelar\n' +
      '                </button>\n' +
      '                <button type="submit" class="btn btn-default" id="btn' + classe + '">\n' +
      '                    <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> Cadastrar\n' +
      '                </button>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '    </div>\n' +
      '</div>';
  js +=
    classe + '.formCadastrar.submit(function () {' +
      'ajax' + classe + '.cadastrar(linha);' +
      classe + '.fecharModal();' +
      'return false;' +
    '});' +
  '});' +
  'function operateFormatter' + classe + '(value, row, index) {' +
    'return [' +
        '"<a rel=' + 'tooltip' + ' title=' + 'Editar' + ' class=' + 'table-action editar' +
        ' href=' + 'javascript:void(0)' + ' title=' + 'Editar' + '>",' +
        '"<i class=' + 'fa fa-edit fa-grid' + '></i>",' +
        '"</a>",' +
        '"<a rel=' + 'tooltip' + ' title=' + 'Excluir' + ' class=' + 'table-action excluir' +
        ' href=' + 'javascript:void(0)' + ' title=' + 'Excluir' + '>",' +
        '"<i class=' + 'fa fa-remove fa-grid' + '></i>",' +
        ' "</a>"' +
      '].join("");' +
  '}' +
    'window.operateEvents' + classe + ' = {' +
      '"click .excluir": function (e, value, row, index) {' +
        classe + '.excluir(row.idfator);' +
      '},' +
      '"click .editar": function (e, value, row, index) {' +
        classe + '.editar(row.idfator);' +
        'linha = index;' +
      '}' +
    '};';
  ajax +=
      'carregar: function (id) {' +
        '$.getJSON(appUrl + "/secured/cadastrosgerais/' + classe.toLowerCase() + '/carregar/" + id, function (data) {' +
          'putResultVal(data, "#formCadastrar' + classe + '");' +
            carregaAjax +
          '});' +
        '},' +
      'listar: function () {' +
        '$.getJSON(appUrl + "/secured/cadastrosespecificos/' + classe.toLowerCase() + '/listar.json", function (data) {' +
          '$("#dados' + classe + 'Table").bootstrapTable({' +
            'data: data,' +
            'toolbar: ".toolbar' + classe + '",' +
            'showRefresh: true,' +
            'search: true,' +
            'showToggle: true,' +
            'showColumns: true,' +
            'pagination: true,' +
            'striped: true,' +
            'sortable: true,' +
            'showBtnCadastrar: true,' +
            'btnCadastrarId: "btnCadastrar' + classe + '",' +
            'btnCadastrarLabel: "Cadastrar",' +
            'pageSize: 10,' +
            'pageList: [8, 10, 25, 50, 100],' +
            'sortName: "idfator",' +
            'sortOrder: "asc",' +
            'formatShowingRows: function (pageFrom, pageTo, totalRows) {' +
              '/*return "Total de registros: " + totalRows; descomentar se necessário*/' +
            '},' +
            'formatRecordsPerPage: function (pageNumber) {' +
              'return pageNumber + "  registros visíveis";' +
            '},' +
            'icons: {' +
              'refresh: "fa fa-refresh",' +
              'toggle: "fa fa-th-list",' +
              'columns: "fa fa-columns",' +
              'detailOpen: "fa fa-plus-circle",' +
              'detailClose: "fa fa-minus-circle"' +
            '}' +
          '});' +
        '$("#btnCadastrar' + classe + '").click(function () {' +
          'linha = undefined;' +
          classe + '.incluir();' +
        '});' +
      '})' +
    '}' +
  '};';
  fs.writeFile(classe + ".js", js, function (err) {
    if (err) {
        console.log("Erro ao gerar o arquivo!\n" + err);
    } else {
        console.log("Arquivo .jsp gerado com sucesso!");
    }
  });

  fs.writeFile("ajax" + classe + ".js", ajax, function (err) {
    if (err) {
        console.log("Erro ao gerar o arquivo!\n" + err);
    } else {
        console.log("Arquivo .jsp gerado com sucesso!");
    }
  });

  return cabecalho;
}

function generator(result, projeto, classe, tabela) {
    var sql = "";
    var cabecalho = "";
    var pk = "";
    var chaves = "";

    if (result[0][20]) {
      var chave = (result[0][20]).split(';');
      for (var i = 0; i < chave.length; i++) {
        if (i == chave.length - 1)
          chaves += chave[i].toLowerCase();
        else
          chaves += chave[i].toLowerCase() + ", ";
      }
    }

    for (var i = 0; i < result.length; i++) {
      var coluna = result[i][1].trim().toLowerCase();
      var tipo = result[i][6];
      var valorPadrao = result[i][13];

      //Verifica se a tabela possui as letras rh no inicio, para posteriormente serem usadas como classe, no java
      var tabelaRelacao = result[i][14];
      if (tabelaRelacao)
        if (tabelaRelacao.substr(0, 2).toLowerCase() == 'rh')
          tabelaRelacao = tabelaRelacao.substr(2, tabelaRelacao.length).capitalizeFirstLetter();
        else
          tabelaRelacao = tabelaRelacao.capitalizeFirstLetter();

      if (result[i][16])
        var chaveRelacao = result[i][16].toLowerCase();

      if (tabelaRelacao) {
          sql += '<span class="code-yellow line">@JoinColumn</span>(name = <span class="code-green">"' + chaveRelacao + '"</span>)</br>' +
              "<span class='code-orange line'>private</span> " + tabelaRelacao + " <span class='code-purple'>" + tabelaRelacao.toLowerCase() + "</span>;</br>";
      } else {
          var tipos = "";
          switch (tipo) {
              case 'INTEIRO':
                  tipos = 'Integer';
                  break;
              case 'CHARCOMBO':
                  tipos = 'String';
                  break;
              case 'CARACTERE':
                  tipos = 'String';
                  break;
              case 'DATA':
                  tipos = 'Date';
                  break;
              case 'HORA':
                  tipos = 'Date';
                  break;
              case 'FLOAT':
                  tipos = 'Double';
                  break;
              case 'INTCOMBO':
                  tipos = 'Integer';
                  break;
              case 'LOGICO(S/N)':
                  tipos = 'String';
                  break;
              case 'MEMO PURO':
                  tipos = 'String';
                  break;
              default:
                  tipos = 'String /*default*/';
                  break;
          }
          sql += "<span class='code-orange line'>private</span> " + tipos + " <span class='code-purple'>" + coluna + "</span>;</br>";
      }
  }
  sql += "}"

  cabecalho =
      '<span class="code-orange">package</span> br.com.' + projeto + '.model;</br></br>' +
      '<span class="code-orange">import</span> br.com.fiscobase.persistence.JoinColumn;</br>' +
      '<span class="code-orange">import</span> br.com.fiscobase.persistence.PrimaryKeys;</br>' +
      '<span class="code-orange">import</span> br.com.fiscobase.persistence.Table;</br>' +
      '<span class="code-orange">import</span> lombok.Data;</br></br>' +
      '<span class="code-yellow">@Data</span></br>' +
      '<span class="code-yellow">@Table</span>(<span class="code-green">"' + tabela.toLowerCase() + '"</span>)</br>' +
      '<span class="code-yellow">@PrimaryKeys</span>(<span class="code-green">"' + chaves + '"</span>)</br>' +
      '<span class="code-orange">public class</span> ' + classe + ' {</br>';
  return cabecalho + sql;
}

router.route('/')
    .get(function (req, res) {
        res.render('index', {title: 'Model Generator', options: options});
    })

router.route('/gerar')
    .get(function (req, res) {
        firebird.attach(options, function (err, db) {
            if (err) throw err;
            var tabela = req.query.tabela;
            var projeto = req.query.projeto;
            var classe = req.query.classe;
            var sql =
              " SELECT "+
              " C.TABELA, C.COLUNA, C.DESCCOMP, "+
              " C.DESCRED, C.DESCTEC, C.HINT, "+
              " C.TIPO, C.INTEIRAS, C.DECIMAIS, "+
              " C.ITENSCB, C.MASCARA, C.VALMIN, "+
              " C.VALMAX, C.VALPADRAO, C.TABREL, "+
              " C.INDREL, C.CHAVEREL, C.EXPRET, "+
              " C.OBRIGATORIO, C.GUIA, I.CHAVE "+
              " FROM PCOLUNAS C "+
              " LEFT JOIN PINDICES I ON "+
              " (C.TABELA = I.TABELA) "+
              " WHERE C.TABELA = '" + tabela.toUpperCase() + "'";

            db.execute(sql, function (err, result) {
              if (err) {
                console.log(err);
                res.send(err);
              }else{
                var java = generator(result, projeto, classe, tabela);
                var html = generetorHTML(result, projeto, classe, tabela);

                fs.writeFile(classe + ".jsp", html, function (err) {
                    if (err) {
                        console.log("Erro ao gerar o arquivo!\n" + err);
                    } else {
                        console.log("Arquivo .jsp gerado com sucesso!");
                    }
                });
                res.send(java);
                db.detach();
              }
            })
        });
    })

router.route('/config')
    .get(function (req, res) {
        var fs = require('fs');
        var exports =
            "module.exports = config =" +
            "	{" +
            "		host: '" + req.query.host + "', " +
            "		port: '" + req.query.port + "', " +
            "		database: '" + req.query.database + "', " +
            "		user: '" + req.query.user + "', " +
            "		password: '" + req.query.password + "', " +
            "		role: null, " +
            "		pageSize: '" + req.query.pageSize + "'" +
            "	}";


        fs.writeFile("config.js", exports, function (err) {
          if (err) {
              console.log("Erro ao gerar o arquivo!\n" + err);
          } else {
              res.sendStatus(200);
              console.log("Arquivo .jsp gerado com sucesso!");
          }
        });
    })

module.exports = router;
