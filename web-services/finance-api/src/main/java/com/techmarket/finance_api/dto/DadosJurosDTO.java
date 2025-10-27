package com.techmarket.finance_api.dto;
import java.math.BigDecimal;
public class DadosJurosDTO {

    private BigDecimal valor;
    private BigDecimal taxa;
    private int meses;

    public BigDecimal getTaxa() {return taxa;}
    public void setTaxa(BigDecimal taxa) { this.taxa = taxa;}

    public BigDecimal getValor() {return valor;}
    public void setValor(BigDecimal valor) {this.valor = valor;}

    public int getMeses() {return meses;}
    public void setMeses(int meses) {this.meses = meses;}


}
