
module.exports = {
    generator: function(result, projeto, classe, descricao) {
        classe = classe.trim();
        var cabecalho =
            '<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>\n' +
            '<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>\n' +
            '<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>\n' +
            '<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>\n' +
            '<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>\n' +
            '<!DOCTYPE html>\n' +
            '<html lang="pt-BR">\n' +
            '<head>\n' +
            '    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>\n' +
            '    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n' +
            '    <link href="/talentrh/wro/commons.css" rel="stylesheet"/>\n' +
            '    <link href="/talentrh/wro/' + projeto.toLowerCase() + '_principal.css" rel="stylesheet"/>\n' +
            '    <link href="/talentrh/wro/' + projeto.toLowerCase() + '_padrao.css" rel="stylesheet"/>\n' +
            '    <link rel="shortcut icon" href="/talentrh/resources/images/outras/favicon.ico"/>\n' +
            '    <title>Cadastro de ' + descricao + '</title>\n' +
            '</head>\n' +
            '<body>\n' +
            '<div class="page-container sidebar-collapsed-back">\n' +
            '    <jsp:include page="../include/header.jsp"/>\n' +
            '    <div class="outter-wp" id="modal' + classe + '">\n' +
            '        <div class="fresh-table toolbar-color-red">\n' +
            '            <div class="toolbar toolbar' + classe + '">\n' +
            '                <h3>Cadastro de ' + descricao + '</h3>\n' +
            '            </div>\n' +
            '            <table id="dados' + classe + 'Table" data-flat="true" class="table">\n' +
            '                <thead>\n';
        for (var i                = 0; i < result.length; i++) {
            var coluna            = result[i][1].trim().toLowerCase();
            var descricaoCompleta = result[i][2];
            var tabelaRelacao     = result[i][14];
            if (tabelaRelacao)
                if (tabelaRelacao.substr(0, 2).toLowerCase() == 'rh')
                    tabelaRelacao = tabelaRelacao.substr(2, tabelaRelacao.length).capitalizeFirstLetter();
                else
                    tabelaRelacao = tabelaRelacao.capitalizeFirstLetter();

            var chaveRelacao      = result[i][16];
            if (chaveRelacao)
                var chaveRelacao  = chaveRelacao.toLowerCase();

            if (tabelaRelacao    != null)
                cabecalho        +=
                '                <th data-field="' + tabelaRelacao + '.' + chaveRelacao + '">' + descricaoCompleta + '</th>\n';
            else
                cabecalho        +=
                '                <th data-field="' + coluna + '">' + descricaoCompleta + '</th>\n';
        }
        cabecalho                +=
            '                <th data-field="actions" data-formatter="operateFormatter" data-events="operateEvents">Ações</th>\n' +
            '                </thead>\n' +
            '            </table>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>\n' +
            '<jsp:include page="../forms/modal' + classe + '.jsp"/>\n' +
            '<jsp:include page="../include/footer.jsp"/>\n' +
            '<script type="text/javascript" src="/talentrh/wro/commons.js"></script>\n' +
            '<script type="text/javascript" src="/talentrh/wro/' + projeto.toLowerCase() + '_padrao.js"></script>\n' +
            '<script type="text/javascript" src="/talentrh/wro/' + projeto.toLowerCase() + '_' + classe.toLowerCase() + '.js"></script>\n' +
            '</body>\n' +
            '</html>';

        return cabecalho;
    }
}
