package com.techmarket.finance_api.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;

import java.math.BigDecimal;

public class DadosContaDTO {

    @NotBlank(message = "A conta de origem é obrigatória")
    private String contaOrigem;

    
    @NotBlank(message = "A conta de destino é obrigatória")
    private String contaDestino;

    // @NotBlank(message = "O valor da transferencia é obrigatório")
    @NotNull(message = "O valor da transferencia deve ser obrigatório.")
    @DecimalMin(value = "0.01", message = "O Valor da transferencia deve ser maior do que zero")
    private BigDecimal valor;

    public String getContaOrigem() { return contaOrigem; }
    public void setContaOrigem(String contaOrigem) {
      this.contaOrigem = contaOrigem;
    }

    public String getContaDestino() { return contaDestino; }
    public void setContaDestino(String contaDestino) {
      this.contaDestino = contaDestino;
    }

    public BigDecimal getValor() {  return valor; }
    public void setValor(BigDecimal valor) {
      this.valor = valor;
    }
}
