$(function(){
	var form = $("#formulario");
	var projeto = $("#projeto");
	var classe = $("#classe");
	var tabela = $("#tabela");
	var codigo = $("#codigo");

	form.submit(function(){
		$.ajax({
            url: "/gerar",
            data: form.serialize(),
            type: "GET",
            success: function (response) {
            	codigo.html(response);
            },
            error: function (xhr, status, error) {
                alert(error);
            }
        });
        return false;
	});

    var formConfig = $("#formConfig");

    formConfig.submit(function(){
        $.ajax({
            url: "/config",
            data: formConfig.serialize(),
            type: "GET",
            success: function (response) {
               if (response == "OK") {
                    alert("Salvo com sucesso!");
               }
            },
            error: function (xhr, status, error) {
                alert(error);
            }
        });
        return false;
    });
});