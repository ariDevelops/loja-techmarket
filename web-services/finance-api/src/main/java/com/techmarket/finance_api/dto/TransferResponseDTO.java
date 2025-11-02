package com.techmarket.finance_api.dto;

import java.time.LocalDateTime;

public class TransferResponseDTO {

    private String transactionId;    // UUID (código único)
    private Long recordNumber;       // número sequencial do registro
    private LocalDateTime timestamp; // data/hora

    public TransferResponseDTO(String transactionId, Long recordNumber, LocalDateTime timestamp) {
        this.transactionId = transactionId;
        this.recordNumber = recordNumber;
        this.timestamp = timestamp;
    }

    public String getTransactionId() { return transactionId; }
    public Long getRecordNumber() { return recordNumber; }
    public LocalDateTime getTimestamp() { return timestamp; }
}

