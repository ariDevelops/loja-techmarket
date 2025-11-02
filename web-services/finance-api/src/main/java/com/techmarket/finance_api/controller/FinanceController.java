package com.techmarket.finance_api.controller;

import com.techmarket.finance_api.dto.DadosContaDTO;
import com.techmarket.finance_api.dto.TransferResponseDTO;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;

import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

// Novos pacotes
import java.time.LocalDateTime;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/finance-api")
@Validated
public class FinanceController {

    private AtomicLong sequence = new AtomicLong(1); // apenas simulando registro


    //http://localhost:8080/finance-api/transferencia
    @PostMapping("/transferencia")
    public ResponseEntity<TransferResponseDTO> receberTransacao(@Valid @RequestBody DadosContaDTO dados) {
        // return ResponseEntity.ok("Transferencia realizada com sucesso!");
        
                TransferResponseDTO response = new TransferResponseDTO(
                UUID.randomUUID().toString(),  // código único
                sequence.getAndIncrement(),    // número incremental
                LocalDateTime.now()            // timestamp
                );

        return ResponseEntity.ok(response);
    } // fim do controller post

} // fim da classe



