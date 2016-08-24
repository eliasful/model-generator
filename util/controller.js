module.exports         = {
    generator: function(projeto, classe) {
        classe         = classe.capitalizeFirstLetter();
        var controller =
            'package br.com.' + projeto + '.controller;\n' +
            'import br.com.' + projeto + '.model.' + classe + ';\n' +
            'import br.com.' + projeto + '.service.' + classe + 'Service;\n' +
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
            '        return new Gson().toJson(' + classe.toLowerCase() + 'Service.findBy(' + classe + '.class, "id' + classe.toLowerCase() + '", id));\n' +
            '    }\n' +
            '    @ResponseBody\n' +
            '    @RequestMapping(value = "/", method = RequestMethod.POST)\n' +
            '    public String salvar(' + classe + ' ' + classe.toLowerCase() + '){\n' +
            '        try {\n' +
            '            if (' + classe.toLowerCase() + ' == null) return null;\n' +
            '            Integer id = ' + classe.toLowerCase() + 'Service.save(' + classe.toLowerCase() + ');\n' +
            '            ' + classe.toLowerCase() + '.setId' + classe.toLowerCase() + '(id)\n' +
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
            '            ' + classe.toLowerCase() + '.setId' + classe.toLowerCase() + '(id);\n' +
            '            return ' + classe.toLowerCase() + 'Service.delete(' + classe.toLowerCase() + ');\n' +
            '        }catch (Exception e){\n' +
            '            e.printStackTrace();\n' +
            '            return -1;\n' +
            '        }\n' +
            '    }\n' +
            '}';

        return controller;
    }
}
