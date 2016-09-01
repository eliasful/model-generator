module.exports = {
    generator: function(result, projeto, classe, tabe) {
        var chaveRelacao      = result[0][16];
        if (chaveRelacao)
            var chaveRelacao  = chaveRelacao.toLowerCase();
        var converter =
                'package br.com.'+projeto+'.converter;'+
								'import br.com.'+projeto+'.model.'+classe+';'+
  							'import br.com.'+projeto+'.service.'+classe+'Service;'+
								'import java.beans.PropertyEditorSupport;'+
								'public class '+classe+'Converter extends PropertyEditorSupport {'+
												'private '+classe+'Service service;'+
												'public '+classe+'Converter('+classe+'Service service) {'+
																'this.service = service;'+
												'@Override'+
												'public void setAsText(String text) {'+
																classe+' obj = service.findBy('+classe+'.class, "'+chaveRelacao+'", Integer.parseInt(text));'+
																'super.setValue(obj);'+
												'}'+
								'}';

          return converter;
    };
}
