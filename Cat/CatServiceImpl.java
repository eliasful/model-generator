package br.com.rhapp.service.impl;
import br.com.fiscobase.repository.impl.GenericVsRepositoryImpl;
import br.com.rhapp.model.cat;
import br.com.rhapp.service.catService;
import org.springframework.stereotype.Service;
@Service
public class CatServiceImpl extends GenericVsRepositoryImpl<Cat> implements CatService {
}