package com.techmarket.finance_api.controller;

import com.techmarket.finance_api.dto.DadosContaDTO;
import com.techmarket.finance_api.dto.DadosJurosDTO;
import com.techmarket.finance_api.dto.NumeroDTO;
import com.techmarket.finance_api.dto.UsuarioDTO;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;

import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.math.BigDecimal;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/finance-api")
@Validated
public class FinanceController {

    // //http://localhost:8080/finance-api
    // @PostMapping
    // public String efetuarSaldo(@RequestBody UsuarioDTO usuarioDTO) {
    //     return "Usuario recebido: " + usuarioDTO.getName() + " (" + usuarioDTO.getEmail() + ")";
    // }

    // //http://localhost:8080/finance-api/calc
    // @PostMapping("/calc")
    // public int calcularDobro(@RequestBody NumeroDTO body) {
    //     return body.getNumero() * 2;
    // }

    // //http://localhost:8080/finance-api/juros
    // @PostMapping("/juros")
    // public BigDecimal calcularJuros(@RequestBody DadosJurosDTO dados) {
    //     BigDecimal valor = dados.getValor();
    //     BigDecimal taxa = dados.getTaxa().divide(new BigDecimal("100"));
    //     BigDecimal meses = new BigDecimal(dados.getMeses());

    //     BigDecimal resultado = valor.multiply(BigDecimal.ONE.add(taxa.multiply(meses)));
    //     return resultado;
    // }

    //http://localhost:8080/finance-api/transferencia
    @PostMapping("/transferencia")
    public ResponseEntity<?> receberTransacao(@Valid @RequestBody DadosContaDTO dados) {
        return ResponseEntity.ok("Transferencia realizada com sucesso!");
    }

}
