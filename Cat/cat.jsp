<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!-- MODAL CADASTRA Cat -->
<div class="modal fade" id="modalCadastrarCat" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Cadastrar Cat</h4>
            </div>
            <div class="modal-body">
				<form:form id="formCadastrarCat">
    				<div class="row">
<!-- idempregado -->
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idempregado" class="control-label">Código do Empregado<span class="campo-required">&bullet;</span> </label>
 <div class="input-group">
   <select data-value="${empregado.pessoa.idpess}" required 
     data-text="${empregado.pessoa.nome}"
     class="js-example-basic-single select form-control autoselect"
     name="empregado" id="empregado">
   </select>
   <span class="input-group-btn">
     <button class="btn btn-default btnInputSearch" type="button"
       onclick="Cat.incluirfunction () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}()">
       <i class="glyphicon glyphicon-plus inputIcon"></i>
     </button>
   </span>
 </div>
</div>
<!-- dtemissao -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="dtemissao" class="control-label">Data de Emissão <span class="campo-required">&bullet;</span></label>
<input type="text" class="form-control" id="dtemissao"placeholder="Data de Emissão"name="dtemissao" required maxlength="8" /></div>
<!-- numero -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="numero" class="control-label">Número CAT  </label>
<input type="text" class="form-control" id="numero"placeholder="Número CAT"name="numero"   maxlength="15" /></div>
<!-- emitente -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="emitente" class="control-label">Emitente  </label>
<input type="text" class="form-control" id="emitente"placeholder="Emitente"name="emitente"   maxlength="1" /></div>
<!-- catemitpor -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="catemitpor" class="control-label">CAT Emitida por?  </label>
<input type="text" class="form-control" id="catemitpor"placeholder="CAT Emitida por?"name="catemitpor"   maxlength="1" /></div>
<!-- tipo -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="tipo" class="control-label">Tipo  </label>
<input type="text" class="form-control" id="tipo"placeholder="Tipo"name="tipo"   maxlength="1" /></div>
<!-- catparcial -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="catparcial" class="control-label">CAT Parcial?  </label>
<input type="text" class="form-control" id="catparcial"placeholder="CAT Parcial?"name="catparcial"   maxlength="1" /></div>
<!-- remmensal -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="remmensal" class="control-label">Remuneração Mensal  </label>
<input type="text" class="form-control" id="remmensal"placeholder="Remuneração Mensal"name="remmensal"   maxlength="12" /></div>
<!-- areatrab -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="areatrab" class="control-label">Área de Trabalho  </label>
<input type="text" class="form-control" id="areatrab"placeholder="Área de Trabalho"name="areatrab"   maxlength="1" /></div>
<!-- idfuncao -->
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idfuncao" class="control-label">Código Função  </label>
 <div class="input-group">
   <select data-value="${empregado.pessoa.idpess}"   
     data-text="${empregado.pessoa.nome}"
     class="js-example-basic-single select form-control autoselect"
     name="funcao" id="funcao">
   </select>
   <span class="input-group-btn">
     <button class="btn btn-default btnInputSearch" type="button"
       onclick="Cat.incluirfunction () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}()">
       <i class="glyphicon glyphicon-plus inputIcon"></i>
     </button>
   </span>
 </div>
</div>
<!-- filiacaoprev -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="filiacaoprev" class="control-label">Filiação Prev. Social  </label>
<input type="text" class="form-control" id="filiacaoprev"placeholder="Filiação Prev. Social"name="filiacaoprev"   maxlength="1" /></div>
<!-- aposentado -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="aposentado" class="control-label">Aposentado?  </label>
<input type="text" class="form-control" id="aposentado"placeholder="Aposentado?"name="aposentado"   maxlength="1" /></div>
<!-- dataacid -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="dataacid" class="control-label">Data do Acidente  </label>
<input type="text" class="form-control" id="dataacid"placeholder="Data do Acidente"name="dataacid"   maxlength="8" /></div>
<!-- horaacid -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="horaacid" class="control-label">Hora do Acidente  </label>
<input type="text" class="form-control" id="horaacid"placeholder="Hora do Acidente"name="horaacid"   maxlength="6" /></div>
<!-- aphrtrab -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="aphrtrab" class="control-label">Após Quantas Horas Trab?  </label>
<input type="text" class="form-control" id="aphrtrab"placeholder="Após Quantas Horas Trab?"name="aphrtrab"   maxlength="6" /></div>
<!-- tipoacid -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="tipoacid" class="control-label">Tipo Acidente  </label>
<input type="text" class="form-control" id="tipoacid"placeholder="Tipo Acidente"name="tipoacid"   maxlength="1" /></div>
<!-- houveafast -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="houveafast" class="control-label">Houve Afastamento?  </label>
<input type="text" class="form-control" id="houveafast"placeholder="Houve Afastamento?"name="houveafast"   maxlength="1" /></div>
<!-- ultdiatrab -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="ultdiatrab" class="control-label">Último Dia Trab.  </label>
<input type="text" class="form-control" id="ultdiatrab"placeholder="Último Dia Trab."name="ultdiatrab"   maxlength="8" /></div>
<!-- localacid -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="localacid" class="control-label">Local do Acidente  </label>
<input type="text" class="form-control" id="localacid"placeholder="Local do Acidente"name="localacid"   maxlength="1" /></div>
<!-- cnpjempresa -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="cnpjempresa" class="control-label">CNPJ da Empresa  </label>
<input type="text" class="form-control" id="cnpjempresa"placeholder="CNPJ da Empresa"name="cnpjempresa"   maxlength="14" /></div>
<!-- cidadeacid -->
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="cidadeacid" class="control-label">Cidade do Acidente  </label>
 <div class="input-group">
   <select data-value="${empregado.pessoa.idpess}"   
     data-text="${empregado.pessoa.nome}"
     class="js-example-basic-single select form-control autoselect"
     name="cidade" id="cidade">
   </select>
   <span class="input-group-btn">
     <button class="btn btn-default btnInputSearch" type="button"
       onclick="Cat.incluirfunction () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}()">
       <i class="glyphicon glyphicon-plus inputIcon"></i>
     </button>
   </span>
 </div>
</div>
<!-- enderecoacid -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="enderecoacid" class="control-label">Endereço Acidente  </label>
<input type="text" class="form-control" id="enderecoacid"placeholder="Endereço Acidente"name="enderecoacid"   maxlength="100" /></div>
<!-- nroendacid -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="nroendacid" class="control-label">Nro. End. Acidente  </label>
<input type="text" class="form-control" id="nroendacid"placeholder="Nro. End. Acidente"name="nroendacid"   maxlength="10" /></div>
<!-- esplocal -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="esplocal" class="control-label">Especifique o Local  </label>
<input type="text" class="form-control" id="esplocal"placeholder="Especifique o Local"name="esplocal"   maxlength="20" /></div>
<!-- parteating -->
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="parteating" class="control-label">Parte do Corpo Atingida  </label>
 <div class="input-group">
   <select data-value="${empregado.pessoa.idpess}"   
     data-text="${empregado.pessoa.nome}"
     class="js-example-basic-single select form-control autoselect"
     name="ptcorpoating" id="ptcorpoating">
   </select>
   <span class="input-group-btn">
     <button class="btn btn-default btnInputSearch" type="button"
       onclick="Cat.incluirfunction () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}()">
       <i class="glyphicon glyphicon-plus inputIcon"></i>
     </button>
   </span>
 </div>
</div>
<!-- agentecausa -->
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="agentecausa" class="control-label">Agente Causador  </label>
 <div class="input-group">
   <select data-value="${empregado.pessoa.idpess}"   
     data-text="${empregado.pessoa.nome}"
     class="js-example-basic-single select form-control autoselect"
     name="ageacidtrab" id="ageacidtrab">
   </select>
   <span class="input-group-btn">
     <button class="btn btn-default btnInputSearch" type="button"
       onclick="Cat.incluirfunction () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}()">
       <i class="glyphicon glyphicon-plus inputIcon"></i>
     </button>
   </span>
 </div>
</div>
<!-- situacaoger -->
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="situacaoger" class="control-label">Situação Geradora  </label>
 <div class="input-group">
   <select data-value="${empregado.pessoa.idpess}"   
     data-text="${empregado.pessoa.nome}"
     class="js-example-basic-single select form-control autoselect"
     name="sitacidtrab" id="sitacidtrab">
   </select>
   <span class="input-group-btn">
     <button class="btn btn-default btnInputSearch" type="button"
       onclick="Cat.incluirfunction () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}()">
       <i class="glyphicon glyphicon-plus inputIcon"></i>
     </button>
   </span>
 </div>
</div>
<!-- houvebo -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="houvebo" class="control-label">Houve Registro Policial?  </label>
<input type="text" class="form-control" id="houvebo"placeholder="Houve Registro Policial?"name="houvebo"   maxlength="1" /></div>
<!-- houvemorte -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="houvemorte" class="control-label">Houve Morte?  </label>
<input type="text" class="form-control" id="houvemorte"placeholder="Houve Morte?"name="houvemorte"   maxlength="1" /></div>
<!-- nometest1 -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="nometest1" class="control-label">Nome Testemunha 1  </label>
<input type="text" class="form-control" id="nometest1"placeholder="Nome Testemunha 1"name="nometest1"   maxlength="40" /></div>
<!-- endtest1 -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="endtest1" class="control-label">Endereço Testemunha 1  </label>
<input type="text" class="form-control" id="endtest1"placeholder="Endereço Testemunha 1"name="endtest1"   maxlength="40" /></div>
<!-- bairrotest1 -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="bairrotest1" class="control-label">Bairro Testemunha 1  </label>
<input type="text" class="form-control" id="bairrotest1"placeholder="Bairro Testemunha 1"name="bairrotest1"   maxlength="30" /></div>
<!-- ceptest1 -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="ceptest1" class="control-label">CEP Testemunha 1  </label>
<input type="text" class="form-control" id="ceptest1"placeholder="CEP Testemunha 1"name="ceptest1"   maxlength="8" /></div>
<!-- muntest1 -->
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="muntest1" class="control-label">Municipio Testemunha 1  </label>
 <div class="input-group">
   <select data-value="${empregado.pessoa.idpess}"   
     data-text="${empregado.pessoa.nome}"
     class="js-example-basic-single select form-control autoselect"
     name="cidade" id="cidade">
   </select>
   <span class="input-group-btn">
     <button class="btn btn-default btnInputSearch" type="button"
       onclick="Cat.incluirfunction () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}()">
       <i class="glyphicon glyphicon-plus inputIcon"></i>
     </button>
   </span>
 </div>
</div>
<!-- fonetest1 -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="fonetest1" class="control-label">Telefone Testemunha 1  </label>
<input type="text" class="form-control" id="fonetest1"placeholder="Telefone Testemunha 1"name="fonetest1"   maxlength="15" /></div>
<!-- nometest2 -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="nometest2" class="control-label">Nome Testemunha 2  </label>
<input type="text" class="form-control" id="nometest2"placeholder="Nome Testemunha 2"name="nometest2"   maxlength="40" /></div>
<!-- endtest2 -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="endtest2" class="control-label">Endereço Testemunha 2  </label>
<input type="text" class="form-control" id="endtest2"placeholder="Endereço Testemunha 2"name="endtest2"   maxlength="40" /></div>
<!-- bairrotest2 -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="bairrotest2" class="control-label">Bairro Testemunha 2  </label>
<input type="text" class="form-control" id="bairrotest2"placeholder="Bairro Testemunha 2"name="bairrotest2"   maxlength="30" /></div>
<!-- ceptest2 -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="ceptest2" class="control-label">CEP Testemunha 2  </label>
<input type="text" class="form-control" id="ceptest2"placeholder="CEP Testemunha 2"name="ceptest2"   maxlength="8" /></div>
<!-- muntest2 -->
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="muntest2" class="control-label">Municipio Testemunha 2  </label>
 <div class="input-group">
   <select data-value="${empregado.pessoa.idpess}"   
     data-text="${empregado.pessoa.nome}"
     class="js-example-basic-single select form-control autoselect"
     name="cidade" id="cidade">
   </select>
   <span class="input-group-btn">
     <button class="btn btn-default btnInputSearch" type="button"
       onclick="Cat.incluirfunction () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}()">
       <i class="glyphicon glyphicon-plus inputIcon"></i>
     </button>
   </span>
 </div>
</div>
<!-- fonetest2 -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="fonetest2" class="control-label">Telefone Testemunha 2  </label>
<input type="text" class="form-control" id="fonetest2"placeholder="Telefone Testemunha 2"name="fonetest2"   maxlength="15" /></div>
<!-- atendmedico -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="atendmedico" class="control-label">Atendimento Médico  </label>
<input type="text" class="form-control" id="atendmedico"placeholder="Atendimento Médico"name="atendmedico"   maxlength="40" /></div>
<!-- dataatend -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="dataatend" class="control-label">Data Atendimento  </label>
<input type="text" class="form-control" id="dataatend"placeholder="Data Atendimento"name="dataatend"   maxlength="8" /></div>
<!-- horaatend -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="horaatend" class="control-label">Hora Atendimento  </label>
<input type="text" class="form-control" id="horaatend"placeholder="Hora Atendimento"name="horaatend"   maxlength="6" /></div>
<!-- idmedico -->
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idmedico" class="control-label">Médico  </label>
 <div class="input-group">
   <select data-value="${empregado.pessoa.idpess}"   
     data-text="${empregado.pessoa.nome}"
     class="js-example-basic-single select form-control autoselect"
     name="medico" id="medico">
   </select>
   <span class="input-group-btn">
     <button class="btn btn-default btnInputSearch" type="button"
       onclick="Cat.incluirfunction () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}()">
       <i class="glyphicon glyphicon-plus inputIcon"></i>
     </button>
   </span>
 </div>
</div>
<!-- houveinternacao -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="houveinternacao" class="control-label">Houve Internação ?  </label>
<input type="text" class="form-control" id="houveinternacao"placeholder="Houve Internação ?"name="houveinternacao"   maxlength="1" /></div>
<!-- durtratamento -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="durtratamento" class="control-label">Duração Tratamento  </label>
<input type="text" class="form-control" id="durtratamento"placeholder="Duração Tratamento"name="durtratamento"   maxlength="6" /></div>
<!-- afasttrat -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="afasttrat" class="control-label">Afastado no Tratamento?  </label>
<input type="text" class="form-control" id="afasttrat"placeholder="Afastado no Tratamento?"name="afasttrat"   maxlength="1" /></div>
<!-- idnatlesao -->
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idnatlesao" class="control-label">Desc. da Natureza da Lesão  </label>
 <div class="input-group">
   <select data-value="${empregado.pessoa.idpess}"   
     data-text="${empregado.pessoa.nome}"
     class="js-example-basic-single select form-control autoselect"
     name="natlesao" id="natlesao">
   </select>
   <span class="input-group-btn">
     <button class="btn btn-default btnInputSearch" type="button"
       onclick="Cat.incluirfunction () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}()">
       <i class="glyphicon glyphicon-plus inputIcon"></i>
     </button>
   </span>
 </div>
</div>
<!-- desclesao -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="desclesao" class="control-label">Descrição Comp. da Lesão  </label>
<input type="text" class="form-control" id="desclesao"placeholder="Descrição Comp. da Lesão"name="desclesao"   maxlength="200" /></div>
<!-- diagprov -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="diagprov" class="control-label">Diganóstico Provável  </label>
<input type="text" class="form-control" id="diagprov"placeholder="Diganóstico Provável"name="diagprov"   maxlength="80" /></div>
<!-- cid10 -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="cid10" class="control-label">CID - 10  </label>
<input type="text" class="form-control" id="cid10"placeholder="CID - 10"name="cid10"   maxlength="10" /></div>
<!-- codunidade -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="codunidade" class="control-label">Código da Unidade  </label>
<input type="text" class="form-control" id="codunidade"placeholder="Código da Unidade"name="codunidade"   maxlength="10" /></div>
<!-- matrservidor -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="matrservidor" class="control-label">Matrícula do Servidor  </label>
<input type="text" class="form-control" id="matrservidor"placeholder="Matrícula do Servidor"name="matrservidor"   maxlength="15" /></div>
<!-- dtrecebida -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="dtrecebida" class="control-label">Recebida em  </label>
<input type="text" class="form-control" id="dtrecebida"placeholder="Recebida em"name="dtrecebida"   maxlength="8" /></div>
<!-- detacidente -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="detacidente" class="control-label">Detalhamento Acidente  </label>
<input type="text" class="form-control" id="detacidente"placeholder="Detalhamento Acidente"name="detacidente"   maxlength="900" /></div>
<!-- nrocatant -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="nrocatant" class="control-label">CAT Anterior  </label>
<input type="text" class="form-control" id="nrocatant"placeholder="Informar o número da CAT de origem, quando tratar-se de CAT de reabertura ou de comunicação de óbito."name="nrocatant"   maxlength="15" /></div>
<!-- lateralidade -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="lateralidade" class="control-label">Lateralidade  </label>
<input type="text" class="form-control" id="lateralidade"placeholder="Nos casos de órgãos bilaterais, ou seja, que se situam dos lados do corpo, assinalar o lado (direito ou esquerdo)."name="lateralidade"   maxlength="1" /></div>
<!-- observacao -->
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="observacao" class="control-label">Observação  </label>
<input type="text" class="form-control" id="observacao"placeholder="Observação"name="observacao"   maxlength="255" /></div>
     			</div>
				</form:form>
			</div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Cancelar
                </button>
                <button type="submit" class="btn btn-default" id="btnCat">
                    <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> Cadastrar
                </button>
            </div>
        </div>
    </div>
</div>