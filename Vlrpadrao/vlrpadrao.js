var linha;
var Vlrpadrao = {
    formCadastrar: $("#formCadastrarVlrpadrao"),
    $modal: $("#modalCadastrarVlrpadrao"),
    incluir: function() {
        Vlrpadrao.$modal.modal("show");
    },
    editar: function(id) {
        ajaxVlrpadrao.carregar(id);
        Vlrpadrao.$modal.modal("show");
    },
    fecharModal: function() {
        Vlrpadrao.$modal.modal("hide");
    },
    excluir: function(id) {
        modalConfirm("", "Deseja realmente excluir Vlrpadrao?", "Sim", "Cancelar", function(result) {
            if (result) {
                ajaxVlrpadrao.excluir(id);
            }
        })
    }
};
$(function() {
    $("[data-toggle=tooltip]").tooltip();
    ajaxVlrpadrao.listar();
    Vlrpadrao.formCadastrar.submit(function() {
        ajaxVlrpadrao.cadastrar(linha);
        Vlrpadrao.fecharModal();
        return false;
    });
});

function operateFormatterVlrpadrao(value, row, index) {
    return ["<a rel=tooltip title=Editar class=table-action editar   href=javascript:void(0) title=Editar>", "<i class=fa fa-edit fa-grid></i>", "</a>", "<a rel=tooltip title=Excluir class=table-action excluir   href=javascript:void(0) title=Excluir>", "<i class=fa fa-remove fa-grid></i>", "</a>"].join("");
}
window.operateEventsVlrpadrao = {
    "click .excluir": function(e, value, row, index) {
        Vlrpadrao.excluir(row.idfator);
    },
    "click .editar": function(e, value, row, index) {
        Vlrpadrao.editar(row.idfator);
        linha = index;
    }
};
