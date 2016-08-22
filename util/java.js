module.exports = {
    generator: function(result, projeto, classe, tabela) {
        classe = classe;
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
}
