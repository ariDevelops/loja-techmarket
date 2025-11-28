	DROP DATABASE IF EXISTS LojaTM;
	CREATE DATABASE LojaTM;

use LojaTM;

DROP TABLE IF EXISTS Contas;
CREATE TABLE Contas (id_conta INT auto_increment PRIMARY KEY,
					 nome_conta VARCHAR(255) NOT NULL);
                     
DROP TABLE IF EXISTS Transacoes;
CREATE TABLE Transacoes ( id_transacao INT AUTO_INCREMENT PRIMARY KEY,
						  id_conta INT NOT NULL,
                          tipo ENUM('CREDITO', 'DEBITO') NOT NULL,
                          valor DECIMAL(15,2) NOT NULL,
                          data_transacao DATETIME DEFAULT current_timestamp,
                          foreign key (id_conta) references Contas(id_conta),
                          INDEX idx_conta_data(id_conta, data_transacao));
                          

insert into Contas(nome_conta) values ("Natalia Silva"), 
									  ("Ariel Vieira");

									
INSERT INTO Transacoes (id_conta, tipo, valor, data_transacao) VALUES
(1, 'CREDITO', 500.00, '2025-10-01 10:00:00'),
(1, 'DEBITO', 200.00, '2025-10-05 15:00:00'),
(1, 'CREDITO', 300.00, '2025-10-10 09:30:00'),
(1, 'DEBITO', 100.00, '2025-10-15 14:45:00'),
(1, 'CREDITO', 700.00, '2025-10-20 08:00:00'),
(2, 'CREDITO', 1000.00, '2025-10-02 12:00:00'),
(2, 'DEBITO', 500.00, '2025-10-07 16:30:00'),
(2, 'CREDITO', 200.00, '2025-10-12 11:00:00');
                     
DELIMITER //

DROP procedure if exists EP_ExtratoConta;
CREATE procedure EP_ExtratoConta(
in p_id_conta INT,
in p_data_inicio DATE
)
BEGIN
	DECLARE saldo_atual DECIMAL(15,2);


-- Logica de credito

select sum( case
			when tipo = 'CREDITO' then valor
			else -valor
			end)
INTO saldo_atual
FROM Transacoes where id_conta=P_id_conta;

	
select p_id_conta as 'ID_CONTA',
       saldo_atual as 'SALDO_ATUAL';
    
select id_transacao as 'ID_TRANSACAO',
	   tipo as 'TIPO_TRANSACAO',
       valor as 'VALOR_TRANSACAO',
	   data_transacao as 'DATA_TRANSACAO'
FROM Transacoes 
where id_conta = p_id_conta
	and data_transacao >= p_data_inicio
	order by data_transacao desc
    limit 10; -- define o limite de 10 ultimas transacoes

END //
DELIMITER ;