module.exports = {
    generator: function(caminho, conteudo) {
        var fs = require('fs');
        fs.writeFile(caminho, conteudo, function(err) {
            if (err) {
                console.log("Erro ao gerar o arquivo!\n" + err);
                return false;
            } else {
                console.log("Arquivo gerado com sucesso!");
                return true;
            }
        });
    }
}
