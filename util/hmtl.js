module.exports = {
    generator: function(result, projeto, classe, tabela, tabs, descricao) {
        var generetorArchive = require('../util/archive');
        classe = classe.trim();
        var cabecalho =
            '<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>\n' +
            '<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>\n' +
            '<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>\n' +
            '<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>\n' +
            '<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>\n' +
            '<!-- MODAL CADASTRA ' + descricao + ' -->\n' +
            '<div class="modal fade" id="modalCadastrar' + classe + '" role="dialog" aria-labelledby="exampleModalLabel"' +
            ' aria-hidden="true" data-keyboard="false" data-backdrop="static">\n' +
            '    <div class="modal-dialog modal-lg">\n' +
            '        <div class="modal-content">\n' +
            '            <div class="modal-header">\n' +
            '               <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span' +
            '                        aria-hidden="true">&times;</span></button>\n' +
            '                <h4 class="modal-title">Cadastrar ' + descricao + '</h4>\n' +
            '            </div>\n' +
            '				<form:form id="formCadastrar' + classe + '">\n' +
            '            <div class="modal-body">\n' +
            '    				   <div class="row">\n';
        var js =
            'var linha;' +
            'var ' + classe + ' = {' +
            ' formCadastrar: $("#formCadastrar' + classe + '"),' +
            ' $modal: $("#modalCadastrar' + classe + '"),' +

            ' incluir: function () {' +
            classe + '.$modal.modal("show");' +
            ' },' +

            ' editar: function (id) {' +
            '   ajax' + classe + '.carregar(id);' +
            classe + '.$modal.modal("show");' +
            ' },' +

            ' fecharModal: function () {' +
            classe + '.$modal.modal("hide");' +
            ' },' +

            ' excluir: function (id) {' +
            '   modalConfirm("", "Deseja realmente excluir ' + descricao + '?", "Sim", "Cancelar", function (result) {' +
            '     if (result) {' +
            '       ajax' + classe + '.excluir(id);' +
            '     }' +
            '   })' +
            ' }' +
            '};' +

            '$(function () {' +
            ' $("[data-toggle=' + 'tooltip' + ']").tooltip();' +
            ' ajax' + classe + '.listar();';




        var carregaAjax = "";
        var chave = [];
        var dataAjax = "";
        if (tabs.length > 0) {
            cabecalho += '' +
                '<ul class="nav nav-tabs" role="tablist">\n';
            for (var i = 0; i < tabs.length; i++) {
                var descricao = tabs[i][1];
                var idTab = descricao.retiraEspaco().toLowerCase();
                var active = i == 0 ? 'active' : ' ';
                cabecalho +=
                    '<li role="presentation" class="' + active + '">\n' +
                    '<a href="#' + idTab + '"\n' +
                    'aria-controls="' + idTab + '"\n' +
                    'role="tab" data-toggle="tab">' + descricao + '</a>\n' +
                    '</li>\n';
            }
            cabecalho += '</ul>\n' +
                '<div class="tab-content"></div>\n';
        }
        for (var i = 0; i < result.length; i++) {
            var coluna = result[i][1].trim().toLowerCase();
            var descricaoCompleta = result[i][2];
            var descricaoTecnica = result[i][4];
            var hint = result[i][5];
            var tipo = result[i][6];
            var inteiras = result[i][7];
            var decimais = result[i][8];
            //dividindo os itens
            if (result[i][9])
                var itemSelect = (result[i][9]).split(';');
            var mascara = result[i][10];
            var valorPadrao = result[i][13];

            //Verifica se a tabela possui as letras rh e rhw no inicio, para posteriormente serem usadas como classe, no java
            var tabelaRelacao = result[i][14];
            if (tabelaRelacao)
                if (tabelaRelacao.substr(0, 2).toLowerCase() === 'rh') {
                    tabelaRelacao = tabelaRelacao.substr(2, tabelaRelacao.length);
                    if (tabelaRelacao.substr(0, 1).toLowerCase() === 'w') {
                        tabelaRelacao = tabelaRelacao.substr(1, tabelaRelacao.length).capitalizeFirstLetter();
                    } else
                        tabelaRelacao = tabelaRelacao.substr(2, tabelaRelacao.length).capitalizeFirstLetter();
                } else
                    tabelaRelacao = tabelaRelacao.capitalizeFirstLetter();



            var chaveRelacao = "";
            if (result[i][16])
                chaveRelacao = result[i][16].toLowerCase();
            var obrigatorio = result[i][18];
            var guia = result[i][19];

            //separando as chaves primarias por virgula
            chave = (result[i][20]).split(';');
            var chaves = undefined;

            if (coluna != "estab") {
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
                        '     name="' + tabelaRelacao.toLowerCase() + '" id="' + tabelaRelacao.toLowerCase() + '">\n' +
                        '   </select>\n' +
                        '   <span class="input-group-btn">\n' +
                        '     <button class="btn btn-default btnInputSearch" type="button"\n' +
                        '       onclick="' + classe + '.incluir' + chaveRelacao.capitalizeFirstLetter() + '()">\n' +
                        '       <i class="glyphicon glyphicon-plus inputIcon"></i>\n' +
                        '     </button>\n' +
                        '   </span>\n' +
                        ' </div>\n' +
                        '</div>\n';
                    js += 'autoCompleteSelect2("#' + coluna + '", "/secured/cadastros/autoComplete/' + tabelaRelacao + '");'
                    carregaAjax += 'setTextSelect2("#' + coluna + '", data.' + coluna + '.idtecnica, data.' + coluna + '.descricao);';
                    dataAjax += '           "' + coluna.toLowerCase() + '": result.' + tabelaRelacao.toLowerCase() + '.' + coluna.toLowerCase() + ',\n';
                } else {
                    var valorID = "'' ";
                    if ((coluna.toLowerCase() === chave[0].toLowerCase() || coluna === chave[1])) {
                        valorID = '"0" readonly';
                        tamanho = 2;
                    } else {
                        valorID = "'' ";
                        tamanho = 10;
                    }
                    dataAjax += '           "' + coluna.toLowerCase() + '": result.' + coluna.toLowerCase() + ',\n';
                    cabecalho +=
                        '<!-- ' + coluna + ' -->\n' +
                        '<div class="col-lg-' + tamanho + ' col-md-' + tamanho + ' col-sm-12 col-xs-12">\n' +
                        '<label for="' + coluna + '" class="control-label">' + descricaoTecnica + ' ' + bullet + '</label>\n';
                    switch (tipo) {
                        case 'INTEIRO':
                            cabecalho +=
                                '<input value=' + valorID + ' type="text" name="' + coluna +
                                '" id="' + coluna + '" maxlength="' + inteiras +
                                '" class="form-control" placeholder="' + hint +
                                '" onkeypress="return somenteNumeros(event)"' +
                                ' ' + required + '/>\n';
                            break;
                        case 'DATA':
                            cabecalho +=
                                '<div class="input-group date" id="' + coluna + 'Div">' +
                                '<input type="text" id="' + coluna +
                                '" name="' + coluna +
                                '" ' + required + ' class="form-control ' +
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
                                '" name="' + coluna + '" ' + required + '>';
                            //inserindo as opções no select
                            for (data in itemSelect) {
                                //pega o valor padrão, caso não esteja marcado
                                var valor = itemSelect[data].substr(0, inteiras);
                                //verifica se o valor gerado é igual ao valor padrão
                                //se for adiciona a opção selecionado
                                if (valorPadrao == valor)
                                    cabecalho += '<option value="' + valor + '" selected>' + valorPadrao + '</option>';
                                else {
                                    cabecalho += '<option value="' + valor + '">' + itemSelect[data] + '</option>';
                                }

                            }

                            cabecalho += '</select>';
                            break;
                        default:

                            cabecalho +=
                                '<input type="text" class="form-control" id="' + coluna + '"' +
                                'placeholder="' + hint + '" value=' + valorID + ' ' +
                                'name="' + coluna + '" ' + required + ' maxlength="' + inteiras + '" />';
                            break;
                    }
                    cabecalho += '</div>\n';
                }
            }
        }
        cabecalho +=
            '     			</div>\n' +
            '			</div>\n' +
            '            <div class="modal-footer">\n' +
            '                <button type="button" class="btn btn-default" data-dismiss="modal">\n' +
            '                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Cancelar\n' +
            '                </button>\n' +
            '                <button type="submit" class="btn btn-default" id="btn' + classe + '">\n' +
            '                    <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> Cadastrar\n' +
            '                </button>\n' +
            '            </div>\n' +
            '				</form:form>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>';
        var chavePrimaria = chave[0].toLowerCase() == "estab" ? chave[1].toLowerCase() : chave[0].toLowerCase();
        js +=
            classe + '.formCadastrar.submit(function () {' +
            ' ajax' + classe + '.cadastrar(linha);' +
            classe + '.fecharModal();' +
            ' return false;' +
            ' });' +
            '});' +
            'function operateFormatter(value, row, index) {' +
            ' return [' +
            "   '<a rel=" + '"tooltip"' + " title=" + '"Editar"' + " class=" + '"table-action editar"' + " href=" + '"javascript:void(0)"' + " title=" + '"Editar"' + ">'," +
            "     '<i class=" + '"fa fa-edit fa-grid"' + "></i>'," +
            "   '</a>'," +
            "   '<a rel=" + '"tooltip"' + " title=" + '"Excluir"' + " class=" + '"table-action excluir"' + " href=" + '"javascript:void(0)"' + " title=" + '"Excluir"' + ">'," +
            "     '<i class=" + '"fa fa-times fa-grid"' + "></i>'," +
            "   '</a>'" +
            ' ].join("");' +
            '}' +
            'window.operateEvents = {' +
            ' "click .excluir": function (e, value, row, index) {' +
            classe + '.excluir(row.' + chavePrimaria + ');' +
            ' },' +
            ' "click .editar": function (e, value, row, index) {' +
            classe + '.editar(row.' + chavePrimaria + ');' +
            '   linha = index;' +
            ' }' +
            '};';
        var ajax =
            ' ajax' + classe + ' = {' +
            ' cadastrar: function (linha) {' +
            '   $.ajax({' +
            '     url: appUrl + "/secured/cadastros/' + classe.toLowerCase() + '/",' +
            '     data: ' + classe + '.formCadastrar.serialize(),' +
            '     type: "POST",' +
            '     beforeSend: function () {' +
            '       botaoLoad($("#btnCadastrar' + classe + '"));' +
            '     },' +
            '     success: function (response) {' +
            '       var result = jQuery.parseJSON(response);' +
            '       if (result) {' +
            '         var data = {' +
            dataAjax +
            '         };' +
            '         if (linha >= 0) {' +
            '           $("#dados' + classe + 'Table").bootstrapTable("updateRow", {index: linha, row: result});' +
            '         } else {' +
            '           $("#dados' + classe + 'Table").bootstrapTable("append", result);' +
            '         }' +
            '         modalAlert("", "Salvo com sucesso!");' +
            '         } else {' +
            '           modalAlert("", "Erro ao salvar!");' +
            '         }' +
            '         botaoNormal($("#btnCadastrar' + classe + '"));' +
            '       },' +
            '     error: function (xhr, status, error) {' +
            '       procError(error, $("#btnCadastrar' + classe + '"));' +
            '     }' +
            '  });' +
            '},' +
            'excluir: function (id) {' +
            ' $.ajax({' +
            '   url: appUrl + "/secured/cadastros/' + classe.toLowerCase() + '/excluir/" + id,' +
            '   type: "DELETE",' +
            '   beforeSend: function () {' +
            '     botaoLoad($("#btnCadastrar' + classe + '"));' +
            '   },' +
            '   success: function (response) {' +
            '     if (response > 0) {' +
            '       modalAlert("", "' + descricao + ' excluido com sucesso!");' +
            '       $("#dados' + classe + 'Table").bootstrapTable("remove", {field: "' + chavePrimaria + '", values: [id]});' +
            '     } else {' +
            '       modalAlert("Erro ao excluir", "Este ' + descricao + ' está vinculado a um registro");' +
            '     }' +
            '     botaoNormal($("#btnCadastrar' + classe + '"));' +
            '   },' +
            '   error: function (xhr, status, error) {' +
            '     procError(error, $("#btnCadastrar' + classe + '"));' +
            '   }' +
            ' });' +
            '},' +
            'carregar: function (id) {' +
            ' $.getJSON(appUrl + "/secured/cadastros/' + classe.toLowerCase() + '/carregar/" + id, function (data) {' +
            '   putResultVal(data, "#formCadastrar' + classe + '");' +
            carregaAjax +
            ' });' +
            '},' +
            'listar: function () {' +
            ' $("#dados' + classe + 'Table").bootstrapTable({' +
            '   url: appUrl + "/secured/cadastros/' + classe.toLowerCase() + '/listar.json",' +
            '   toolbar: ".toolbar' + classe + '",' +
            '   showRefresh: true,' +
            '   search: true,' +
            '   showToggle: true,' +
            '   showColumns: true,' +
            '   pagination: true,' +
            '   striped: true,' +
            '   sortable: true,' +
            '   showBtnCadastrar: true,' +
            '   btnCadastrarId: "btnCadastrar' + classe + '",' +
            '   btnCadastrarLabel: "Cadastrar",' +
            '   pageSize: 10,' +
            '   pageList: [8, 10, 25, 50, 100],' +
            '   sortName: "' + chavePrimaria + '",' +
            '   sortOrder: "asc",' +
            '   formatShowingRows: function (pageFrom, pageTo, totalRows) {' +
            '   /*return "Total de registros: " + totalRows; descomentar se necessário*/' +
            ' },' +
            ' formatRecordsPerPage: function (pageNumber) {' +
            '   return pageNumber + "  registros visíveis";' +
            ' },' +
            ' icons: {' +
            '   refresh: "fa fa-refresh",' +
            '   toggle: "fa fa-th-list",' +
            '   columns: "fa fa-columns",' +
            '   detailOpen: "fa fa-plus-circle",' +
            '   detailClose: "fa fa-minus-circle"' +
            ' }' +
            ' });' +
            ' $("#btnCadastrar' + classe + '").click(function () {' +
            '   linha = undefined;' +
            classe + '.incluir();' +
            '   });' +
            ' }' +
            '};';



        generetorArchive.generator(classe + "/" + classe.toLowerCase() + ".js", js);
        generetorArchive.generator(classe + "/" + "ajax.js", ajax);

        return cabecalho;
    }
}
