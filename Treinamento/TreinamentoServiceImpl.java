package br.com.rhapp.service.impl;
import br.com.fiscobase.repository.impl.GenericVsRepositoryImpl;
import br.com.rhapp.model.treinamento;
import br.com.rhapp.service.treinamentoService;
import org.springframework.stereotype.Service;
@Service
public class TreinamentoServiceImpl extends GenericVsRepositoryImpl<Treinamento> implements TreinamentoService {
}