<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!-- MODAL CADASTRA Empregado -->
<div class="modal fade" id="modalCadastraEmpregado" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Cadastrar Empregado</h4>
            </div>
            <div class="modal-body">
				<form:form id="formCadastraEmpregado">
    				<div class="row">
<!-- ESTAB -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="estab" class="control-label">Estab <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[estab]" id="estab">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- IDEMPREGADO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="idempregado" class="control-label">Empregado</label>
<input type="text" name="idempregado" id="idempregado" maxlength="10" class="form-control" placeholder="Código do Empregado" onkeypress="return somenteNumeros(event)" value="${empregado.ctpsserie}"/>
</div>
</div>
<!-- IDPESS -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idpess" class="control-label">Código da Pessoa <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idpess]" id="idpess">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- IDTPADM -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idtpadm" class="control-label">Tipo Admissão <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idtpadm]" id="idtpadm">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- IDSIND -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idsind" class="control-label">Sindicato <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idsind]" id="idsind">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- IDVINC -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idvinc" class="control-label">Vínculo <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idvinc]" id="idvinc">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- IDTURNO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idturno" class="control-label">Turno <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idturno]" id="idturno">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- IDCATEG -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idcateg" class="control-label">Categoria <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idcateg]" id="idcateg">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- IDTABSAL -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idtabsal" class="control-label">Código da Tabela de Salários <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idtabsal]" id="idtabsal">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- REPOUSO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="repouso" class="control-label">Dia de Repouso</label>
<select class="form-control" id="repouso" name="repouso" required value="null"><option value="8">8 - Cfe. Escala</option><option value="7">7 - Sábado</option><option value="6">6 - Sexta-Feira</option><option value="5">5 - Quinta-Feira</option><option value="4">4 - Quarta-Feira</option><option value="3">3 - Terça-Feira</option><option value="2">2 - Segunda-Feira</option><option value="1">1 - Domingo</option></select></div>
</div>
<!-- DTADMISSAO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="dtadmissao" class="control-label">Data de Admissão</label>
<div class="input-group date" id="dtadmissaoDiv"><input type="text" id="dtadmissao" name="dtadmissao" class="form-control value="<fmt:formatDate value="${empregado.dtadmissao}" pattern="dd/MM/yyyy"/>" placeholder="Data de Admissão" required><span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span></span></div></div>
</div>
<!-- CTPSNRO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="ctpsnro" class="control-label">Número da CTPS</label>
<input type="text" class="form-control" id="ctpsnro"placeholder="Número da Carteira de Trabalho"name="ctpsnro" maxlength="40" /></div>
</div>
<!-- CTPSNROOF -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="ctpsnroof" class="control-label">Ctps Nro Oficial</label>
<input type="text" class="form-control" id="ctpsnroof"placeholder="Ctps Nro Oficial"name="ctpsnroof" maxlength="40" /></div>
</div>
<!-- CTPSSERIE -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="ctpsserie" class="control-label">Ctps Serie</label>
<input type="text" class="form-control" id="ctpsserie"placeholder="Ctps Serie"name="ctpsserie" maxlength="40" /></div>
</div>
<!-- CTPSUF -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="ctpsuf" class="control-label">CTPS UF</label>
<select class="form-control" id="ctpsuf" name="ctpsuf" required value="PR"><option value="TO">TO</option><option value="SP">SP</option><option value="SE">SE</option><option value="SC">SC</option><option value="RS">RS</option><option value="RR">RR</option><option value="RO">RO</option><option value="RN">RN</option><option value="RJ">RJ</option><option value="PR" selected>PR</option><option value="PI">PI</option><option value="PE">PE</option><option value="PB">PB</option><option value="PA">PA</option><option value="MT">MT</option><option value="MS">MS</option><option value="MG">MG</option><option value="MA">MA</option><option value="ES">ES</option><option value="GO">GO</option><option value="DF">DF</option><option value="CE">CE</option><option value="BA">BA</option><option value="AP">AP</option><option value="AM">AM</option><option value="AL">AL</option><option value="AC">AC</option></select></div>
</div>
<!-- CTPSDATA -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="ctpsdata" class="control-label">Ctps Data</label>
<div class="input-group date" id="ctpsdataDiv"><input type="text" id="ctpsdata" name="ctpsdata" class="form-control value="<fmt:formatDate value="${empregado.dtadmissao}" pattern="dd/MM/yyyy"/>" placeholder="Data da Carteira de Trabalho" required><span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span></span></div></div>
</div>
<!-- PIS -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="pis" class="control-label">Pis/Ci</label>
<input type="text" class="form-control" id="pis"placeholder="Pis/Ci"name="pis" maxlength="40" /></div>
</div>
<!-- DTANUENIOS -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="dtanuenios" class="control-label">Data Base Anuênios</label>
<div class="input-group date" id="dtanueniosDiv"><input type="text" id="dtanuenios" name="dtanuenios" class="form-control value="<fmt:formatDate value="${empregado.dtadmissao}" pattern="dd/MM/yyyy"/>" placeholder="Data Base Anuênios" required><span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span></span></div></div>
</div>
<!-- DTOPTFGTS -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="dtoptfgts" class="control-label">Data Opção FGTS</label>
<div class="input-group date" id="dtoptfgtsDiv"><input type="text" id="dtoptfgts" name="dtoptfgts" class="form-control value="<fmt:formatDate value="${empregado.dtadmissao}" pattern="dd/MM/yyyy"/>" placeholder="Data Opção FGTS" required><span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span></span></div></div>
</div>
<!-- DTEXPERIE -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="dtexperie" class="control-label">Final Contrato Experiência</label>
<div class="input-group date" id="dtexperieDiv"><input type="text" id="dtexperie" name="dtexperie" class="form-control value="<fmt:formatDate value="${empregado.dtadmissao}" pattern="dd/MM/yyyy"/>" placeholder="Final Contrato Experiência" required><span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span></span></div></div>
</div>
<!-- RECFGTS -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="recfgts" class="control-label">Recolhe FGTS?</label>
<select class="form-control" id="recfgts" name="recfgts" required value="S"><option value="N">Não</option><option value="S" selected>Sim</option></select></div>
</div>
<!-- VINCFGTS -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="vincfgts" class="control-label">Vinc.Dv-FGTS</label>
<input type="text" class="form-control" id="vincfgts"placeholder="Vinc.Dv-FGTS"name="vincfgts" maxlength="40" /></div>
</div>
<!-- RECINSS -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="recinss" class="control-label">Recolhe INSS?</label>
<select class="form-control" id="recinss" name="recinss" required value="S"><option value="N">Não</option><option value="S" selected>Sim</option></select></div>
</div>
<!-- IDFPAS -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idfpas" class="control-label">Código FPAS <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idfpas]" id="idfpas">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- INCGPS -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="incgps" class="control-label">Incluir na GPS?</label>
<select class="form-control" id="incgps" name="incgps" required value="S"><option value="N">Não</option><option value="S" selected>Sim</option></select></div>
</div>
<!-- INCSEFIP -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="incsefip" class="control-label">Incluir na SEFIP?</label>
<select class="form-control" id="incsefip" name="incsefip" required value="S"><option value="N">Não</option><option value="S" selected>Sim</option></select></div>
</div>
<!-- RECIRRF -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="recirrf" class="control-label">Recolhe IRRF?</label>
<select class="form-control" id="recirrf" name="recirrf" required value="S"><option value="N">Não</option><option value="S" selected>Sim</option></select></div>
</div>
<!-- REC13O -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="rec13o" class="control-label">Recebe 13º Salário?</label>
<select class="form-control" id="rec13o" name="rec13o" required value="S"><option value="N">Não</option><option value="S" selected>Sim</option></select></div>
</div>
<!-- RECADTOS -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="recadtos" class="control-label">Recebe Adiantamentos?</label>
<select class="form-control" id="recadtos" name="recadtos" required value="S"><option value="N">Não</option><option value="S" selected>Sim</option></select></div>
</div>
<!-- RECVALET -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="recvalet" class="control-label">Recebe Vale Transporte?</label>
<select class="form-control" id="recvalet" name="recvalet" required value="S"><option value="N">Não</option><option value="S" selected>Sim</option></select></div>
</div>
<!-- INCCAGED -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="inccaged" class="control-label">Incluir no Caged?</label>
<select class="form-control" id="inccaged" name="inccaged" required value="S"><option value="N">Não</option><option value="S" selected>Sim</option></select></div>
</div>
<!-- INCRAIS -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="incrais" class="control-label">Incluir na RAIS?</label>
<select class="form-control" id="incrais" name="incrais" required value="S"><option value="N">Não</option><option value="S" selected>Sim</option></select></div>
</div>
<!-- INCQUADHORA -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="incquadhora" class="control-label">Incluir no Quadro de Horário?</label>
<select class="form-control" id="incquadhora" name="incquadhora" required value="S"><option value="N">Não</option><option value="S" selected>Sim</option></select></div>
</div>
<!-- OBSQUADHORA -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="obsquadhora" class="control-label">Observação Quadro de Horários</label>
<input type="text" class="form-control" id="obsquadhora"placeholder="Observação Quadro de Horários"name="obsquadhora" maxlength="40" /></div>
</div>
<!-- TIPOREC -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="tiporec" class="control-label">Tipo do Recebimento</label>
<select class="form-control" id="tiporec" name="tiporec" required value="D"><option value="D" selected>Dinheiro</option><option value="C">Cheque</option><option value="B">Banco</option></select></div>
</div>
<!-- IDAGENCIA -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idagencia" class="control-label">Agência Bancária <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idagencia]" id="idagencia">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- CONTABANCO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="contabanco" class="control-label">Conta Bancária</label>
<input type="text" class="form-control" id="contabanco"placeholder="Conta Bancária"name="contabanco" maxlength="40" /></div>
</div>
<!-- DIGCONTA -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="digconta" class="control-label">Dígito da Conta</label>
<input type="text" class="form-control" id="digconta"placeholder="Dígito da Conta"name="digconta" maxlength="40" /></div>
</div>
<!-- OPBRADESCO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="opbradesco" class="control-label">Cód. Operação Bradesco</label>
<input type="text" name="opbradesco" id="opbradesco" maxlength="5" class="form-control" placeholder="Cód. Operação Bradesco" onkeypress="return somenteNumeros(event)" value="${empregado.ctpsserie}"/>
</div>
</div>
<!-- OPCAIXA -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="opcaixa" class="control-label">Cód. Operação Caixa</label>
<input type="text" name="opcaixa" id="opcaixa" maxlength="3" class="form-control" placeholder="Cód. Operação Caixa Economica Federal" onkeypress="return somenteNumeros(event)" value="${empregado.ctpsserie}"/>
</div>
</div>
<!-- SALPRETENDE -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="salpretende" class="control-label">Salário Pretendido</label>
<input type="text" class="form-control" id="salpretende"placeholder="Salário Pretendido"name="salpretende" maxlength="40" /></div>
</div>
<!-- NUMCHAPA -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="numchapa" class="control-label">Número Cartão</label>
<input type="text" name="numchapa" id="numchapa" maxlength="6" class="form-control" placeholder="Número Cartão" onkeypress="return somenteNumeros(event)" value="${empregado.ctpsserie}"/>
</div>
</div>
<!-- UTIPE -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="utipe" class="control-label">Utiliza Ponto Eletrônico?</label>
<select class="form-control" id="utipe" name="utipe" required value="N"><option value="N" selected>Não</option><option value="S">Sim</option></select></div>
</div>
<!-- CODIGOPE -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="codigope" class="control-label">Código Ponto Eletrônico</label>
<input type="text" class="form-control" id="codigope"placeholder="Código Ponto Eletrônico"name="codigope" maxlength="40" /></div>
</div>
<!-- TEMALVARA -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="temalvara" class="control-label">Tem Alvará Judicial?</label>
<select class="form-control" id="temalvara" name="temalvara" required value="N"><option value="S">Sim</option><option value="N" selected>Não</option></select></div>
</div>
<!-- REGISTRO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="registro" class="control-label">Registro na Empresa</label>
<input type="text" class="form-control" id="registro"placeholder="Registro na Empresa"name="registro" maxlength="40" /></div>
</div>
<!-- DIASFERIAS -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="diasferias" class="control-label">Dias Férias no Ano</label>
<input type="text" name="diasferias" id="diasferias" maxlength="3" class="form-control" placeholder="Dias Férias no Ano" onkeypress="return somenteNumeros(event)" value="${empregado.ctpsserie}"/>
</div>
</div>
<!-- FORNECEDORFIN -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="fornecedorfin" class="control-label">Cód. Fornecedor no Financeiro</label>
<input type="text" name="fornecedorfin" id="fornecedorfin" maxlength="10" class="form-control" placeholder="Cód. Fornecedor no Financeiro" onkeypress="return somenteNumeros(event)" value="${empregado.ctpsserie}"/>
</div>
</div>
<!-- BMRESC -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="bmresc" class="control-label">Base p/ Médias de Rescisão</label>
<input type="text" class="form-control" id="bmresc"placeholder="Base p/ Médias de Rescisão"name="bmresc" maxlength="40" /></div>
</div>
<!-- CALCMAIORREM -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="calcmaiorrem" class="control-label">Calcular Rescisão Sobre Maior </label>
<select class="form-control" id="calcmaiorrem" name="calcmaiorrem" required value="Não"><option value="S">Sim</option><option value="N">Não</option></select></div>
</div>
<!-- IDVLRHREXTDIU -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idvlrhrextdiu" class="control-label">Vlr Padrão - Hr Extra Diurna <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idvlrhrextdiu]" id="idvlrhrextdiu">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- IDVLRHREXTNOT -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idvlrhrextnot" class="control-label">Vlr Padrão - Hr Extra Noturna <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idvlrhrextnot]" id="idvlrhrextnot">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- IDVLRMHREXTDIU -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idvlrmhrextdiu" class="control-label">Vlr Padrão -M. Hr Extra Diurna <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idvlrmhrextdiu]" id="idvlrmhrextdiu">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- IDVLRMHREXTNOT -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idvlrmhrextnot" class="control-label">Vlr Padrão -M. Hr Extra Noturn <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idvlrmhrextnot]" id="idvlrmhrextnot">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- RECGRCS -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="recgrcs" class="control-label">Recolhe GRCS?</label>
<select class="form-control" id="recgrcs" name="recgrcs" required value="Sim"><option value="N">Não</option><option value="S">Sim</option></select></div>
</div>
<!-- IDTABANUENIO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idtabanuenio" class="control-label">Tabela de Anuênios <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idtabanuenio]" id="idtabanuenio">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- IDCURRICULO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idcurriculo" class="control-label">Currículo no RH - Seleção <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idcurriculo]" id="idcurriculo">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- DTTRANSF -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="dttransf" class="control-label">Data de Transferencia</label>
<div class="input-group date" id="dttransfDiv"><input type="text" id="dttransf" name="dttransf" class="form-control value="<fmt:formatDate value="${empregado.dtadmissao}" pattern="dd/MM/yyyy"/>" placeholder="Data de Transferencia" required><span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span></span></div></div>
</div>
<!-- IDOPSAUDE -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idopsaude" class="control-label">Cód. Operadora Saúde <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idopsaude]" id="idopsaude">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- MATRICULA -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="matricula" class="control-label">Matrícula</label>
<input type="text" name="matricula" id="matricula" maxlength="10" class="form-control" placeholder="Matrícula" onkeypress="return somenteNumeros(event)" value="${empregado.ctpsserie}"/>
</div>
</div>
<!-- EMPAPOSENTADO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="empaposentado" class="control-label">Empregado Aposentado?</label>
<select class="form-control" id="empaposentado" name="empaposentado" required value="N"><option value="S">Sim</option><option value="N" selected>Não</option></select></div>
</div>
<!-- DTAPOSENTADORIA -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="dtaposentadoria" class="control-label">Data da Aposentadoria</label>
<div class="input-group date" id="dtaposentadoriaDiv"><input type="text" id="dtaposentadoria" name="dtaposentadoria" class="form-control value="<fmt:formatDate value="${empregado.dtadmissao}" pattern="dd/MM/yyyy"/>" placeholder="Data da Aposentadoria" required><span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span></span></div></div>
</div>
<!-- RECCONTSINDANO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="reccontsindano" class="control-label">Recolhe Contribuição Sindical </label>
<select class="form-control" id="reccontsindano" name="reccontsindano" required value="S"><option value="N">Não</option><option value="S" selected>Sim</option></select></div>
</div>
<!-- IDOPERDENTARIA -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idoperdentaria" class="control-label">Cód. Operadora Dentária <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idoperdentaria]" id="idoperdentaria">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- DTTRANSOUTEMP -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="dttransoutemp" class="control-label">Data Tranferência outra Empres</label>
<div class="input-group date" id="dttransoutempDiv"><input type="text" id="dttransoutemp" name="dttransoutemp" class="form-control value="<fmt:formatDate value="${empregado.dtadmissao}" pattern="dd/MM/yyyy"/>" placeholder="Data Tranferência outra Empresa" required><span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span></span></div></div>
</div>
<!-- TPCONTA -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="tpconta" class="control-label">Tipo de Conta</label>
<select class="form-control" id="tpconta" name="tpconta" required value="1"><option value="2">2 - Conta Poupança </option><option value="1" selected>1 - Conta Corrente</option></select></div>
</div>
<!-- TPREGTRABALHISTA -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="tpregtrabalhista" class="control-label">Tipo Regime Trabalhista</label>
<select class="form-control" id="tpregtrabalhista" name="tpregtrabalhista" required value="1"><option value="2">2 - RJP - Regime Jurídico Próprio</option><option value="1" selected>1 - CLT - Consolidação das Leis do Trabalho</option></select></div>
</div>
<!-- TPREGPREVIDENCIARIO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="tpregprevidenciario" class="control-label">Tipo de Registro Previdenciári</label>
<select class="form-control" id="tpregprevidenciario" name="tpregprevidenciario" required value="1"><option value="3">3 - RPPE - Regime Próprio de Previdência Social no Exterior</option><option value="2">2 - RPPS - Regime Próprio da Previdência Social</option><option value="1" selected>1 - RGPS - Regime Geral da Previdência Social</option></select></div>
</div>
<!-- EMPSDOUACAO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="empsdouacao" class="control-label">Emp. com SD/Ad. por Ação Fisca</label>
<select class="form-control" id="empsdouacao" name="empsdouacao" required value="N"><option value="S">Sim</option><option value="N" selected>Não</option></select></div>
</div>
<!-- PUBBENEF -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="pubbenef" class="control-label">Público Beneficiário</label>
<select class="form-control" id="pubbenef" name="pubbenef" required value="1"><option value="7">7 - Outros</option><option value="6">6 - Jovens</option><option value="5">5 - Feminino</option><option value="4">4 - Cooperados</option><option value="3">3 - Operacional</option><option value="2">2 - Tático</option><option value="1" selected>1 - Estratégico</option></select></div>
</div>
<!-- INDADMISSAO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="indadmissao" class="control-label">Indicativo de Admissão</label>
<select class="form-control" id="indadmissao" name="indadmissao" required value="1"><option value="3">3 - Decorrente de Decisão Judicial.</option><option value="2">2 - Decorrente de Ação Fiscal</option><option value="1" selected>1 - Normal</option></select></div>
</div>
<!-- INDDESCCP -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="inddesccp" class="control-label">Indicador de desconto da contr</label>
<select class="form-control" id="inddesccp" name="inddesccp" required value="1"><option value="3">3 - Contribuição sobre o limite máximo de salário de contribuição já descontada em outra(s) empresa(s).</option><option value="2">2 - Contribuição descontada por outra(s) empresa(s) sobre valor inferior ao limite máximo do salário de contribuição</option><option value="1" selected>1 - Contribuição descontada pelo empregador declarante</option></select></div>
</div>
<!-- BRIGADA -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="brigada" class="control-label">Empregado Participa Brigada?</label>
<select class="form-control" id="brigada" name="brigada" required value="N"><option value="S">Sim</option><option value="N" selected>Não</option></select></div>
</div>
<!-- IDPROCJUDALVARA -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idprocjudalvara" class="control-label">Cód. Processo Alvará <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idprocjudalvara]" id="idprocjudalvara">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- IDINSTITUICAO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idinstituicao" class="control-label">Instituição <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idinstituicao]" id="idinstituicao">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- IDINSTITUICAOINT -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idinstituicaoint" class="control-label">Agente de Integração <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idinstituicaoint]" id="idinstituicaoint">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- NATESTAGIO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="natestagio" class="control-label">Natureza do Estágio</label>
<select class="form-control" id="natestagio" name="natestagio" required value="O"><option value="N">N - Não Obrigatório</option><option value="O" selected>O - Obrigatório</option></select></div>
</div>
<!-- NIVESTAGIO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="nivestagio" class="control-label">Nível do Estágio</label>
<select class="form-control" id="nivestagio" name="nivestagio" required value="4"><option value="4" selected>4 - Superior.</option><option value="3">3 - Formação Profissional</option><option value="2">2 - Médio</option><option value="1">1 - Fundamental</option></select></div>
</div>
<!-- AREAATUACAO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="areaatuacao" class="control-label">Área de Atuação</label>
<input type="text" class="form-control" id="areaatuacao"placeholder="Área de Atuação"name="areaatuacao" maxlength="40" /></div>
</div>
<!-- NROAPOSEGURO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="nroaposeguro" class="control-label">Nro. Apólice de Seguro</label>
<input type="text" class="form-control" id="nroaposeguro"placeholder="Nro. Apólice de Seguro"name="nroaposeguro" maxlength="40" /></div>
</div>
<!-- DTTERMINO -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="dttermino" class="control-label">Data Término</label>
<div class="input-group date" id="dtterminoDiv"><input type="text" id="dttermino" name="dttermino" class="form-control value="<fmt:formatDate value="${empregado.dtadmissao}" pattern="dd/MM/yyyy"/>" placeholder="Data Término" required><span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span></span></div></div>
</div>
<!-- IDSUPERVISOR -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
<label for="idsupervisor" class="control-label">Supervisor <span class="campo-required">&bullet;</span></label>
<div class="input-group">
<select data-value="${empregado.pessoa.idpess}"
data-text="${empregado.pessoa.nome}"
class="js-example-basic-single select form-control autoselect"
name="Empregado[idsupervisor]" id="idsupervisor">
</select>
<span class="input-group-btn">
<button class="btn btn-default btnInputSearch" type="button"
onclick="empregados.incluirPessoa()">
<i class="glyphicon glyphicon-plus inputIcon"></i>
</button>
</span>
</div>
</div>
</div>
<!-- NROLIVROREG -->
<div class="form-group">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<label for="nrolivroreg" class="control-label">Número do Livro de Registro</label>
<input type="text" name="nrolivroreg" id="nrolivroreg" maxlength="10" class="form-control" placeholder="Número do Livro de Registro" onkeypress="return somenteNumeros(event)" value="${empregado.ctpsserie}"/>
</div>
</div>
     			</div>
				</form:form>
			</div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Cancelar
                </button>
                <button type="submit" class="btn btn-default" id="btnEmpregado">
                    <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> Cadastrar
                </button>
            </div>
        </div>
    </div>
</div>