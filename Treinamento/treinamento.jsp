<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="/talentrh/wro/commons.css" rel="stylesheet"/>
    <link href="/talentrh/wro/rhapp_principal.css" rel="stylesheet"/>
    <link href="/talentrh/wro/rhapp_padrao.css" rel="stylesheet"/>
    <link rel="shortcut icon" href="/talentrh/resources/images/outras/favicon.ico"/>
    <title>Cadastro de Treinamento</title>
</head>
<body>
<div class="page-container sidebar-collapsed-back">
    <jsp:include page="../include/header.jsp"/>
    <div class="outter-wp" id="modalTreinamento">
        <div class="fresh-table toolbar-color-red">
            <div class="toolbar toolbarTreinamento">
                <h3>Cadastro de Treinamento</h3>
            </div>
            <table id="dadosTreinamentoTable" data-flat="true" class="table">
                <thead>
                <th data-field="Filial.estab">Estab</th>
                <th data-field="idtreinamento">ID Treinamento</th>
                <th data-field="imagem">Imagem</th>
                <th data-field="conteudo">Conteúdo</th>
                <th data-field="resumo">Resumo</th>
                <th data-field="local">Local</th>
                <th data-field="Wtreingrupo.idgrupo">Grupo</th>
                <th data-field="freqmin">Frequência Mínima</th>
                <th data-field="notamin">Nota Mínima</th>
                <th data-field="Instituicao.idinstituicao">Instituição</th>
                <th data-field="Wsala.idsala">Sala</th>
                <th data-field="Worcamento.estab;idorcamento">Orçamento</th>
                <th data-field="finalizado">Finalizado</th>
                <th data-field="dataconclusao">Data de Conclusão</th>
                <th data-field="cor">Cor</th>
                <th data-field="Wturma.estab;idturma">Turma</th>
                <th data-field="datavalidade">DATA DE VALIDADE</th>
                <th data-field="actions" data-formatter="operateFormatter" data-events="operateEvents">Ações</th>
                </thead>
            </table>
        </div>
    </div>
</div>
<jsp:include page="../forms/modalTreinamento.jsp"/>
<jsp:include page="../include/footer.jsp"/>
<script type="text/javascript" src="/talentrh/wro/commons.js"></script>
<script type="text/javascript" src="/talentrh/wro/rhapp_padrao.js"></script>
<script type="text/javascript" src="/talentrh/wro/rhapp_treinamento.js"></script>
</body>
</html>