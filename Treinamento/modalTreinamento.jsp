<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!-- MODAL CADASTRA Treinamento -->
<div class="modal fade" id="modalCadastrarTreinamento" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Cadastrar Treinamento</h4>
            </div>
				<form:form id="formCadastrarTreinamento">
            <div class="modal-body">
    				<div class="row">
<!-- idtreinamento -->
<div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
<label for="idtreinamento" class="control-label">ID Treinamento <span class="campo-required">&bullet;</span></label>
<input value=''  type="text" name="idtreinamento" id="idtreinamento" maxlength="10" class="form-control" placeholder="ID Treinamento" onkeypress="return somenteNumeros(event)" required/>
</div>
<!-- imagem -->
<div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
<label for="imagem" class="control-label">Imagem  </label>
<input type="text" class="form-control" id="imagem"placeholder="Imagem" value=''  name="imagem"   maxlength="0" /></div>
<!-- conteudo -->
<div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
<label for="conteudo" class="control-label">Conteúdo  </label>
<input type="text" class="form-control" id="conteudo"placeholder="Conteúdo" value=''  name="conteudo"   maxlength="500" /></div>
<!-- resumo -->
<div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
<label for="resumo" class="control-label">Resumo <span class="campo-required">&bullet;</span></label>
<input type="text" class="form-control" id="resumo"placeholder="Resumo" value=''  name="resumo" required maxlength="100" /></div>
<!-- local -->
<div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
<label for="local" class="control-label">Local  </label>
<select class="form-control" id="local" name="local" "><option value="I">null</option><option value="E">null</option></select></div>
<!-- idgrupo -->
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idgrupo" class="control-label">Grupo  </label>
 <div class="input-group">
   <select data-value="${empregado.pessoa.idpess}"   
     data-text="${empregado.pessoa.nome}"
     class="js-example-basic-single select form-control autoselect"
     name="treingrupo" id="treingrupo">
   </select>
   <span class="input-group-btn">
     <button class="btn btn-default btnInputSearch" type="button"
       onclick="Treinamento.incluirIdgrupo()">
       <i class="glyphicon glyphicon-plus inputIcon"></i>
     </button>
   </span>
 </div>
</div>
<!-- freqmin -->
<div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
<label for="freqmin" class="control-label">Frequência Mínima  </label>
<input type="text" class="form-control" id="freqmin"placeholder="Frequência Mínima" value=''  name="freqmin"   maxlength="12" /></div>
<!-- notamin -->
<div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
<label for="notamin" class="control-label">Nota Mínima  </label>
<input type="text" class="form-control" id="notamin"placeholder="Nota Mínima" value=''  name="notamin"   maxlength="12" /></div>
<!-- idinstituicao -->
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idinstituicao" class="control-label">Instituição  </label>
 <div class="input-group">
   <select data-value="${empregado.pessoa.idpess}"   
     data-text="${empregado.pessoa.nome}"
     class="js-example-basic-single select form-control autoselect"
     name="stituicao" id="stituicao">
   </select>
   <span class="input-group-btn">
     <button class="btn btn-default btnInputSearch" type="button"
       onclick="Treinamento.incluirIdinstituicao()">
       <i class="glyphicon glyphicon-plus inputIcon"></i>
     </button>
   </span>
 </div>
</div>
<!-- idsala -->
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idsala" class="control-label">Sala  </label>
 <div class="input-group">
   <select data-value="${empregado.pessoa.idpess}"   
     data-text="${empregado.pessoa.nome}"
     class="js-example-basic-single select form-control autoselect"
     name="sala" id="sala">
   </select>
   <span class="input-group-btn">
     <button class="btn btn-default btnInputSearch" type="button"
       onclick="Treinamento.incluirIdsala()">
       <i class="glyphicon glyphicon-plus inputIcon"></i>
     </button>
   </span>
 </div>
</div>
<!-- idorcamento -->
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idorcamento" class="control-label">Orçamento  </label>
 <div class="input-group">
   <select data-value="${empregado.pessoa.idpess}"   
     data-text="${empregado.pessoa.nome}"
     class="js-example-basic-single select form-control autoselect"
     name="orcamento" id="orcamento">
   </select>
   <span class="input-group-btn">
     <button class="btn btn-default btnInputSearch" type="button"
       onclick="Treinamento.incluirEstab;idorcamento()">
       <i class="glyphicon glyphicon-plus inputIcon"></i>
     </button>
   </span>
 </div>
</div>
<!-- finalizado -->
<div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
<label for="finalizado" class="control-label">Finalizado  </label>
<select class="form-control" id="finalizado" name="finalizado" "><option value="S">null</option><option value="N">null</option></select></div>
<!-- dataconclusao -->
<div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
<label for="dataconclusao" class="control-label">Data de Conclusão  </label>
<input type="text" class="form-control" id="dataconclusao"placeholder="Data de Conclusão" value=''  name="dataconclusao"   maxlength="8" /></div>
<!-- cor -->
<div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
<label for="cor" class="control-label">Cor  </label>
<input type="text" class="form-control" id="cor"placeholder="Cor" value=''  name="cor"   maxlength="40" /></div>
<!-- idturma -->
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idturma" class="control-label">Turma  </label>
 <div class="input-group">
   <select data-value="${empregado.pessoa.idpess}"   
     data-text="${empregado.pessoa.nome}"
     class="js-example-basic-single select form-control autoselect"
     name="turma" id="turma">
   </select>
   <span class="input-group-btn">
     <button class="btn btn-default btnInputSearch" type="button"
       onclick="Treinamento.incluirEstab;idturma()">
       <i class="glyphicon glyphicon-plus inputIcon"></i>
     </button>
   </span>
 </div>
</div>
<!-- datavalidade -->
<div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
<label for="datavalidade" class="control-label">DATA DE VALIDADE  </label>
<input type="text" class="form-control" id="datavalidade"placeholder="DATA DE VALIDADE" value=''  name="datavalidade"   maxlength="8" /></div>
     			</div>
			</div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Cancelar
                </button>
                <button type="submit" class="btn btn-default" id="btnTreinamento">
                    <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> Cadastrar
                </button>
            </div>
				</form:form>
        </div>
    </div>
</div>