package br.com.rhapp.controller;
import br.com.rhapp.model.Treinamento;
import br.com.rhapp.service.TreinamentoService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
@Controller
@RequestMapping(value = "/secured/cadastros/treinamento")
public class TreinamentoController {    @Autowired
    private TreinamentoService treinamentoService;
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String app() {
        return "/secured/cadastros/treinamento";
    }
    @ResponseBody
    @RequestMapping(value = "/listar", method = RequestMethod.GET)
    public String listar() {
        try {
            return new Gson().toJson(treinamentoService.list(Treinamento.class));
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
    @ResponseBody
    @RequestMapping(value = "/carregar/{id}", method = RequestMethod.GET)
    public String carregar(@PathVariable("id") Integer id) {
        return new Gson().toJson(treinamentoService.findBy(Treinamento.class, "idtreinamento", id));
    }
    @ResponseBody
    @RequestMapping(value = "/", method = RequestMethod.POST)
    public String salvar(Treinamento treinamento){
        try {
            if (treinamento == null) return null;
            Integer id = treinamentoService.save(treinamento);
            treinamento.setIdtreinamento(id)
            return new Gson().toJson(treinamento);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
    @ResponseBody
    @RequestMapping(value = "/excluir/{id}", method = RequestMethod.DELETE)
    public Integer excluir(@PathVariable("id") Integer id){
        try {
            Treinamento treinamento = new Treinamento();
            treinamento.setIdtreinamento(id);
            return treinamentoService.delete(treinamento);
        }catch (Exception e){
            e.printStackTrace();
            return -1;
        }
    }
}