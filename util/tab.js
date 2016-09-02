module.exports = {

    generator: function(result, projeto, classe, tabela, descricao) {
        function arrayUnique(array) {
            var a = array.concat();
            for (var i = 0; i < a.length; ++i) {
                for (var j = i + 1; j < a.length; ++j) {
                    if (a[i] === a[j])
                        a.splice(j--, 1);
                }
            }

            return a;
        }
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
        var guiaId = [];
        var guia = [];
        var array = [];
        for (var i = 0; i < result.length; i++) {
            guiaId.push(result[i][19] == null ? 1 : result[i][19]);
            var a = [result[i][21] == null ? 'tab' : result[i][21]];
            guia.push(result[i][21] == null ? 'tab' : result[i][21]);
            array = arrayUnique(guia.concat(a));
        }
        var guiaMax = Math.max.apply(Math, guiaId);
        var html = '<div class="tab-content">'
        var html = '<ul class="nav nav-tabs" role="tablist">\n';
        for (var j = 0; j < guiaMax; j++) {
            var active = j == 0 ? ' in active' : '';
            html +=
                '<li role="presentation" class="' + active + '">\n' +
                '<a href="#' + array[j].toLowerCase().retiraEspaco().retiraEspecial() + '"\n' +
                'aria-controls="' + array[j].toLowerCase().retiraEspaco().retiraEspecial() + '"\n' +
                'role="tab" data-toggle="tab">' + array[j] + '</a>\n' +
                '</li>\n';
        }
        html += '</ul>\n' +
              '<div class="tab-content">';
        for (var j = 0; j < guiaMax; j++) {
            html += '<div role="tabpanel" class="tab-pane fade ' + active + '" id="' + array[j].toLowerCase().retiraEspaco().retiraEspecial() + '">';
            for (var i = 0; i < result.length; i++) {
                if (result[i][21] == array[j]) {
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
                                tabelaRelacao = tabelaRelacao.substr(0, tabelaRelacao.length).capitalizeFirstLetter();
                        } else
                            tabelaRelacao = tabelaRelacao.capitalizeFirstLetter();
                    var textoRelacao = "";
                    if (result[i][17])
                        textoRelacao = result[i][17].split(";")[0].toLowerCase();

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
                            html += '<!-- ' + coluna + ' -->\n' +
                                '<div class="col-lg-' + tamanho + ' col-md-' + tamanho + ' col-sm-6 col-xs-6">\n' +
                                '<label for="' + coluna + '" class="control-label">' + descricaoTecnica + bullet + ' </label>\n' +
                                ' <div class="input-group">\n' +
                                '   <select data-value="${empregado.pessoa.idpess}" ' + required + ' \n' +
                                '     data-text="${empregado.pessoa.nome}"\n' +
                                '     class="js-example-basic-single select form-control autoselect"\n' +
                                '     name="' + tabelaRelacao.toLowerCase() + '" id="' + coluna + '">\n' +
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
                            carregaAjax += 'setTextSelect2("#' + coluna + '", data.' + tabelaRelacao.toLowerCase() + '.' + chaveRelacao + ', data.' + tabelaRelacao.toLowerCase() + '.' + textoRelacao + ');';
                        } else {
                            var valorID = "'' ";
                            if ((coluna.toLowerCase() === chave[0].toLowerCase() || coluna === chave[1])) {
                                valorID = '"0" readonly';
                                tamanho = 2;
                            } else {
                                valorID = "'' ";
                                tamanho = 6;
                            }
                            html +=
                                '<!-- ' + coluna + ' -->\n' +
                                '<div class="col-lg-' + tamanho + ' col-md-' + tamanho + ' col-sm-12 col-xs-12">\n' +
                                '<label for="' + coluna + '" class="control-label">' + descricaoTecnica + ' ' + bullet + '</label>\n';
                            switch (tipo) {
                                case 'INTEIRO':
                                    html +=
                                        '<input value=' + valorID + ' type="text" name="' + coluna +
                                        '" id="' + coluna + '" maxlength="' + inteiras +
                                        '" class="form-control" placeholder="' + hint +
                                        '" onkeypress="return somenteNumeros(event)"' +
                                        ' ' + required + '/>\n';
                                    break;
                                case 'DATA':
                                    html +=
                                        '<div class="input-group date" id="' + coluna + 'Div">' +
                                        '<input type="text" id="' + coluna +
                                        '" name="' + coluna +
                                        '" ' + required + ' class="form-control" ' +
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
                                    html +=
                                        '<select class="form-control" id="' + coluna +
                                        '" name="' + coluna + '" ' + required + '>';
                                    //inserindo as opções no select
                                    for (data in itemSelect) {
                                        //pega o valor padrão, caso não esteja marcado
                                        var valor = itemSelect[data].substr(0, inteiras);
                                        //verifica se o valor gerado é igual ao valor padrão
                                        //se for adiciona a opção selecionado
                                        if (valorPadrao == valor)
                                            html += '<option value="' + valor + '" selected>' + valorPadrao + '</option>';
                                        else {
                                            html += '<option value="' + valor + '">' + itemSelect[data] + '</option>';
                                        }

                                    }

                                    html += '</select>';
                                    break;
                                default:

                                    html +=
                                        '<input type="text" class="form-control" id="' + coluna + '"' +
                                        'placeholder="' + hint + '" value=' + valorID + ' ' +
                                        'name="' + coluna + '" ' + required + ' maxlength="' + inteiras + '" />';
                                    break;
                            }
                            html += '</div>\n';
                        }
                    }
                }
            }
            html += '</div>';
        }
        html += '</div></div>';

        return html;

    }
}
