<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="/talentrh/wro/commons.css" rel="stylesheet">
                    <link href="/talentrh/wro/rhapp_principal.css" rel="stylesheet">
                        <link href="/talentrh/wro/rhapp_padrao.css" rel="stylesheet">
                            <link rel="shortcut icon" href="/talentrh/resources/images/outras/favicon.ico"/>
                            <title>Cadastro de Vlrpadrao</title>
                        </head>
                        <body>
                            <div class="page-container sidebar-collapsed-back">
                                <jsp:include page="../include/header.jsp"/>
                                <div class="outter-wp" id="modalVlrpadrao">
                                    <div class="fresh-table toolbar-color-red">
                                        <div class="toolbar toolbarVlrpadrao">
                                            <h3>Cadastro de Vlrpadrao</h3>
                                        </div>
                                        <table id="dadosVlrpadraoTable" data-flat="true" class="table">
                                            <thead>
                                                <th data-field="idvlrpadrao">Código</th>
                                                <th data-field="descricao">Descrição</th>
                                                <th data-field="formula">Fórmula</th>
                                                <th data-field="actions" data-formatter="operateFormatter" data-events="operateEvents">Ações</th>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <jsp:include page="../forms/modalVlrpadrao.jsp"/>
                            <jsp:include page="../include/footer.jsp"/>
                            <script type="text/javascript" src="/talentrh/wro/commons.js"></script>
                            <script type="text/javascript" src="/talentrh/wro/rhapp_principal.js"></script>
                            <script type="text/javascript" src="/talentrh/wro/rhapp_padrao.js"></script>
                            <script type="text/javascript" src="/talentrh/wro/rhapp_vlrpadrao.js"></script>
                        </body>
                    </html>
