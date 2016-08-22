 ajaxVlrpadrao = {
     cadastrar: function(linha) {
         $.ajax({
             url: appUrl + "/secured/cadastros/vlrpadrao/",
             data: Vlrpadrao.formCadastrar.serialize(),
             type: "POST",
             beforeSend: function() {
                 botaoLoad($("#btnCadastrarVlrpadrao"));
             },
             success: function(response) {
                 var result = jQuery.parseJSON(response);
                 if (result.idfator > 0) {
                     var data = {
                         "idfator": result.idfator,
                         "descricao": result.descricao,
                         "tecutil": result.tecutil
                     };
                     if (linha >= 0) {
                         $("#dadosVlrpadraoTable").bootstrapTable("updateRow", {
                             index: linha,
                             row: result
                         });
                     } else {
                         $("#dadosVlrpadraoTable").bootstrapTable("append", result);
                     }
                     modalAlert("", "Salvo com sucesso!");
                 } else {
                     modalAlert("", "Erro ao salvar!");
                 }
                 botaoNormal($("#btnCadastrarVlrpadrao"));
             },
             error: function(xhr, status, error) {
                 procError(error, $("#btnCadastrarVlrpadrao"));
             }
         });
     },
     excluir: function(id) {
         $.ajax({
             url: appUrl + "/secured/cadastros/vlrpadrao/excluir/" + id,
             type: "DELETE",
             beforeSend: function() {
                 botaoLoad($("#btnCadastrarVlrpadrao"));
             },
             success: function(response) {
                 if (response > 0) {
                     modalAlert("", "Vlrpadrao excluido com sucesso!");
                     $("#dadosVlrpadraoTable").bootstrapTable("remove", {
                         field: "idfator",
                         values: [id]
                     });
                 } else {
                     modalAlert("Erro ao excluir", "Este Vlrpadrao está vinculado a um registro");
                 }
                 botaoNormal($("#btnCadastrarVlrpadrao"));
             },
             error: function(xhr, status, error) {
                 procError(error, $("#btnCadastrarVlrpadrao"));
             }
         });
     },
     carregar: function(id) {
         $.getJSON(appUrl + "/secured/cadastros/vlrpadrao/carregar/" + id, function(data) {
             putResultVal(data, "#formCadastrarVlrpadrao");
         });
     },
     listar: function() {
         $("#dadosVlrpadraoTable").bootstrapTable({
             url: appUrl + "/secured/cadastros/vlrpadrao/listar.json",
             toolbar: ".toolbarVlrpadrao",
             showRefresh: true,
             search: true,
             showToggle: true,
             showColumns: true,
             pagination: true,
             striped: true,
             sortable: true,
             showBtnCadastrar: true,
             btnCadastrarId: "btnCadastrarVlrpadrao",
             btnCadastrarLabel: "Cadastrar",
             pageSize: 10,
             pageList: [8, 10, 25, 50, 100],
             sortName: "idfator",
             sortOrder: "asc",
             formatShowingRows: function(pageFrom, pageTo, totalRows) { /*return "Total de registros: " + totalRows; descomentar se necessário*/ },
             formatRecordsPerPage: function(pageNumber) {
                 return pageNumber + "  registros visíveis";
             },
             icons: {
                 refresh: "fa fa-refresh",
                 toggle: "fa fa-th-list",
                 columns: "fa fa-columns",
                 detailOpen: "fa fa-plus-circle",
                 detailClose: "fa fa-minus-circle"
             }
         });
         $("#btnCadastrarVlrpadrao").click(function() {
             linha = undefined;
             Vlrpadrao.incluir();
         });
     }
 };
