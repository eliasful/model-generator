package br.com.rhapp.controller;
import br.com.rhapp.model.Vlrpadrao;
import br.com.rhapp.service.VlrpadraoService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
@Controller
@RequestMapping(value = "/secured/cadastros/vlrpadrao")
public class VlrpadraoController {    @Autowired
    private VlrpadraoService vlrpadraoService;
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String app() {
        return "/secured/cadastros/vlrpadrao";
    }
    @ResponseBody
    @RequestMapping(value = "/listar", method = RequestMethod.GET)
    public String listar() {
        try {
            return new Gson().toJson(vlrpadraoService.list(Vlrpadrao.class));
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
    @ResponseBody
    @RequestMapping(value = "/carregar/{id}", method = RequestMethod.GET)
    public String carregar(@PathVariable("id") Integer id) {
        return new Gson().toJson(vlrpadraoService.findBy(Vlrpadrao.class, "idvlrpadrao", id));
    }
    @ResponseBody
    @RequestMapping(value = "/", method = RequestMethod.POST)
    public String salvar(Vlrpadrao vlrpadrao){
        try {
            if (Vlrpadrao == null) return null;
            Integer id = vlrpadraoService.save(vlrpadrao);
            Vlrpadrao.setIdvlrpadrao(id)
            return new Gson().toJson(vlrpadrao);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
    @ResponseBody
    @RequestMapping(value = "/excluir/{id}", method = RequestMethod.DELETE)
    public Integer excluir(@PathVariable("id") Integer id){
        try {
            Vlrpadrao vlrpadrao = new Vlrpadrao();
            vlrpadrao.setIdvlrpadrao(id);
            return vlrpadraoService.delete(vlrpadrao);
        }catch (Exception e){
            e.printStackTrace();
            return -1;
        }
    }
}