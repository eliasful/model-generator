module.exports = {
    generator: function(projeto, classe, result) {
        var generetorArchive = require('../util/archive');
        classe = classe.trim();
        var initService = "";
        var binder = "";
        var init = "";
        var initImport = "";
        var autocomplete = "";
        for (var i = 0; i < result.length; i++) {
            var tabRel = result[i][14];
            var chaveRel = result[i][16];
            var descricaoRel = result[i][17];
            if (tabRel) {
                if (tabRel.substr(0, 2).toLowerCase() === 'rh') {
                    tabRel = tabRel.substr(2, tabRel.length);
                    if (tabRel.substr(0, 1).toLowerCase() === 'w') {
                        tabRel = tabRel.substr(1, tabRel.length).capitalizeFirstLetter();
                    } else
                        tabRel = tabRel.substr(0, tabRel.length).capitalizeFirstLetter();
                } else
                    tabRel = tabRel.capitalizeFirstLetter();
                initImport +=
                    'import br.com.'+ projeto +'.converter.'+ tabRel +'Converter;\n';
                initService +=
                    '    @Autowired\n' +
                    '    private ' + tabRel + 'Service ' + tabRel.toLowerCase() + 'Service;\n';
                binder += 'binder.registerCustomEditor(' + tabRel + '.class, new ' + tabRel + 'Converter(this.' + tabRel.toLowerCase() + 'Service));\n';
                init =
                    '@InitBinder\n' +
                    'protected void initBinder(ServletRequestDataBinder binder) throws Exception {\n' +
                        binder +
                    '}\n';

                autocomplete +=
                '@RequestMapping(value = "/secured/cadastros/autoComplete/'+ tabRel +'", method = RequestMethod.GET)'+
								'public'+
								'@ResponseBody'+
								'String autoComplete'+ tabRel +'(String query) {'+
												'Object obj = autoCompleteService.autoComplete('+ tabRel +'.class, query, "'+ chaveRel.toLowerCase() +'", "'+ descricaoRel.toLowerCase() +'");'+
												'return retorno(obj, "'+ chaveRel.toLowerCase() +'", "'+ descricaoRel.toLowerCase() +'");'+
								'}'
            }
        }

        var chaveRelacao = "";
        if (result[0][20])
            chaveRelacao = result[0][20].toLowerCase();
        var controller =
            'package br.com.' + projeto + '.controller;\n' +
            'import br.com.' + projeto + '.model.' + classe + ';\n' +
            'import br.com.' + projeto + '.service.' + classe + 'Service;\n' +
            initImport +
            'import com.google.gson.Gson;\n' +
            'import org.springframework.beans.factory.annotation.Autowired;\n' +
            'import org.springframework.stereotype.Controller;\n' +
            'import org.springframework.web.bind.ServletRequestDataBinder;\n' +
            'import org.springframework.web.bind.annotation.*;\n' +
            'import javax.servlet.http.HttpServletRequest;\n' +
            '@Controller\n' +
            '@RequestMapping(value = "/secured/cadastros/' + classe.toLowerCase() + '")\n' +
            'public class ' + classe + 'Controller {' +
            '    @Autowired\n' +
            '    private ' + classe + 'Service ' + classe.toLowerCase() + 'Service;\n' +
            initService +
            '    @RequestMapping(value = "/", method = RequestMethod.GET)\n' +
            '    public String app() {\n' +
            '        return "/secured/cadastros/' + classe.toLowerCase() + '";\n' +
            '    }\n' +
            '    @ResponseBody\n' +
            '    @RequestMapping(value = "/listar", method = RequestMethod.GET)\n' +
            '    public String listar() {\n' +
            '        try {\n' +
            '            return new Gson().toJson(' + classe.toLowerCase() + 'Service.list(' + classe + '.class));\n' +
            '        } catch (Exception e) {\n' +
            '            e.printStackTrace();\n' +
            '            return null;\n' +
            '        }\n' +
            '    }\n' +
            '    @ResponseBody\n' +
            '    @RequestMapping(value = "/carregar/{id}", method = RequestMethod.GET)\n' +
            '    public String carregar(@PathVariable("id") Integer id) {\n' +
            '        try{\n' +
            '           return new Gson().toJson(' + classe.toLowerCase() + 'Service.findBy(' + classe + '.class, "' + chaveRelacao + '", id));\n' +
            '        }catch(Exception e){\n' +
            '           e.printStackTrace();\n' +
            '           return null;\n' +
            '        }\n' +
            '    }\n' +
            '    @ResponseBody\n' +
            '    @RequestMapping(value = "/", method = RequestMethod.POST)\n' +
            '    public String salvar(' + classe + ' ' + classe.toLowerCase() + '){\n' +
            '        try {\n' +
            '            if (' + classe.toLowerCase() + ' == null) return null;\n' +
            '            Integer id = ' + classe.toLowerCase() + 'Service.save(' + classe.toLowerCase() + ');\n' +
            '            ' + classe.toLowerCase() + '.set' + chaveRelacao.capitalizeFirstLetter() + '(id);\n' +
            '            return new Gson().toJson(' + classe.toLowerCase() + ');\n' +
            '        }catch (Exception e){\n' +
            '            e.printStackTrace();\n' +
            '            return null;\n' +
            '        }\n' +
            '    }\n' +
            '    @ResponseBody\n' +
            '    @RequestMapping(value = "/excluir/{id}", method = RequestMethod.DELETE)\n' +
            '    public Integer excluir(@PathVariable("id") Integer id){\n' +
            '        try {\n' +
            '            ' + classe + ' ' + classe.toLowerCase() + ' = new ' + classe + '();\n' +
            '            ' + classe.toLowerCase() + '.set' + chaveRelacao.capitalizeFirstLetter() + '(id);\n' +
            '            return ' + classe.toLowerCase() + 'Service.delete(' + classe.toLowerCase() + ');\n' +
            '        }catch (Exception e){\n' +
            '            e.printStackTrace();\n' +
            '            return -1;\n' +
            '        }\n' +
            '    }\n'+
                init +
            '}';

        if (autocomplete)
          generetorArchive.generator(classe + "/autocomplete.java", autocomplete);

        return controller;
    }
}
