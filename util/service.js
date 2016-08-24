module.exports      = {
    service: function(projeto, classe) {
        classe      = classe.capitalizeFirstLetter().trim();
        var service =
            'package br.com.' + projeto.toLowerCase() + '.service;\n' +
            'import br.com.fiscobase.repository.GenericVsRepository;\n' +
            'import br.com.' + projeto.toLowerCase() + '.model.' + classe.toLowerCase() + ';\n' +
            'public interface ' + classe + 'Service extends GenericVsRepository<' + classe + '> {\n' +
            '}';
        return service;
    },

    serviceImpl: function(projeto, classe) {
        classe      = classe.capitalizeFirstLetter().trim();
        var impl    =
            'package br.com.' + projeto.toLowerCase() + '.service.impl;\n' +
            'import br.com.fiscobase.repository.impl.GenericVsRepositoryImpl;\n' +
            'import br.com.' + projeto.toLowerCase() + '.model.' + classe.toLowerCase() + ';\n' +
            'import br.com.' + projeto.toLowerCase() + '.service.' + classe.toLowerCase() + 'Service;\n' +
            'import org.springframework.stereotype.Service;\n' +
            '@Service\n' +
            'public class ' + classe + 'ServiceImpl extends GenericVsRepositoryImpl<' + classe + '> implements ' + classe + 'Service {\n' +
            '}';
        return impl;
    }
}
