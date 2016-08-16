<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!-- MODAL CADASTRA Funcao -->
<div class="modal fade" id="modalCadastraFuncao" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Cadastrar Funcao</h4>
            </div>
            <div class="modal-body">
				<form:form id="formCadastraFuncao">
    				<div class="row">
<!-- IDFUNCAO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="idfuncao" class="control-label">Função <span class='campo-required'>&bullet;</span></label>
<input type="text" name="idfuncao" id="idfuncao" maxlength="5" class="form-control" placeholder="Código Função" onkeypress="return somenteNumeros(event)" value="${empregado.ctpsserie}" />
</div>
</div>
<!-- DESCRICAO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="descricao" class="control-label">Descrição <span class='campo-required'>&bullet;</span></label>
<input type="text" class="form-control" id="descricao"placeholder="Descrição"name="descricao"  maxlength="40" /></div>
</div>
<!-- CBO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="cbo" class="control-label">CBO  </label>
<input type="text" name="cbo" id="cbo" maxlength="6" class="form-control" placeholder="Código Brasileiro de Ocupação" onkeypress="return somenteNumeros(event)" value="${empregado.ctpsserie}" />
</div>
</div>
<!-- OCSEFIP -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="ocsefip" class="control-label">Ocorrência SEFIP  </label>
<select class="form-control" id="ocsefip" name="ocsefip" value="null"><option value="8">8 - Mais de um vínculo empregatício. Exposição a agente nocivo (aposetadoria especial aos 25 anos de trabalho)</option><option value="7">7 - Mais de um vínculo empregatício. Exposição a agente nocivo (aposetadoria especial aos 20 anos de trabalho)</option><option value="6">6 - Mais de um vínculo empregatício. Exposição a agente nocivo (aposetadoria especial aos 15 anos de trabalho)</option><option value="5">5 - Mais de um vínculo empregatício. Não Exposição a agente nocivo</option><option value="4">4 - Exposição a agente nocivo (aposetadoria especial aos 25 anos de trabalho)</option><option value="3">3 -  Exposição a agente nocivo (aposetadoria especial aos 20 anos de trabalho)</option><option value="2">2 - Exposição a agente nocivo (aposetadoria especial aos 15 anos de trabalho)</option><option value="1">1 - Não Exposição a agente nocivo</option><option value="0">0 - Sem exposição a agente nocivo - Trabalhador nunca esteve exposto</option></select></div>
</div>
<!-- ANOSAPESP -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="anosapesp" class="control-label">Anos Aposentadoria Especial <span class='campo-required'>&bullet;</span></label>
<input type="text" name="anosapesp" id="anosapesp" maxlength="2" class="form-control" placeholder="Anos Aposentadoria Especial" onkeypress="return somenteNumeros(event)" value="${empregado.ctpsserie}" />
</div>
</div>
<!-- REQUISITOS -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="requisitos" class="control-label">Requisitos  </label>
<input type="text" class="form-control" id="requisitos"placeholder="Requisitos"name="requisitos"  maxlength="40" /></div>
</div>
<!-- DESCATIVIDADE -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="descatividade" class="control-label">Descrição da Atividade  </label>
<input type="text" class="form-control" id="descatividade"placeholder="Descrição da Atividade"name="descatividade"  maxlength="40" /></div>
</div>
<!-- RISCOSATIVIDADE -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="riscosatividade" class="control-label">Riscos da Atividade  </label>
<input type="text" class="form-control" id="riscosatividade"placeholder="Riscos da Atividade"name="riscosatividade"  maxlength="40" /></div>
</div>
<!-- ATIVO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="ativo" class="control-label">Ativa?  </label>
<select class="form-control" id="ativo" name="ativo" value="S"><option value="N">Não</option><option value="S" selected>Sim</option></select></div>
</div>
     			</div>
				</form:form>
			</div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Cancelar
                </button>
                <button type="submit" class="btn btn-default" id="btnFuncao">
                    <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> Cadastrar
                </button>
            </div>
        </div>
    </div>
</div>