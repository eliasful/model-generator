<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<!-- MODAL CADASTRA Vlrpadrao -->
<div class="modal fade" id="modalCadastrarVlrpadrao" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">Cadastrar Vlrpadrao</h4>
            </div>
            <div class="modal-body">
                <form:form id="formCadastrarVlrpadrao">
                    <div class="row">
                        <!-- idvlrpadrao -->
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="idvlrpadrao" class="control-label">Código
                                <span class="campo-required">&bullet;</span>
                            </label>
                            <input type="text" class="form-control" id="idvlrpadrao" placeholder="Código" name="idvlrpadrao" required maxlength="6"/></div>
                        <!-- descricao -->
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="descricao" class="control-label">Descrição
                            </label>
                            <input type="text" class="form-control" id="descricao" placeholder="Descrição" name="descricao" maxlength="60"/></div>
                        <!-- formula -->
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <label for="formula" class="control-label">Fórmula
                            </label>
                            <input type="text" class="form-control" id="formula" placeholder="Fórmula" name="formula" maxlength="80"/></div>
                    </div>
                </form:form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                    Cancelar
                </button>
                <button type="submit" class="btn btn-default" id="btnVlrpadrao">
                    <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
                    Cadastrar
                </button>
            </div>
        </div>
    </div>
</div>
