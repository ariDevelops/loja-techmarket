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
(1, 'DEBITO', 75.50,  '2025-11-03 08:20:00'),
(1, 'CREDITO', 1200.00,'2025-11-06 11:10:00'),
(1, 'DEBITO', 340.90, '2025-11-11 18:05:00'),
(1, 'CREDITO', 90.00, '2025-11-14 09:00:00'),
(1, 'DEBITO', 560.25, '2025-11-18 20:15:00'),
(1, 'CREDITO', 250.75,'2025-11-21 13:40:00'),
(2, 'DEBITO', 45.00,  '2025-11-04 07:55:00'),
(2, 'CREDITO', 320.60,'2025-11-09 14:25:00'),
(2, 'DEBITO', 210.30, '2025-11-17 10:05:00'),
(2, 'CREDITO', 150.00,'2025-11-25 16:45:00');


DELIMITER $$
DROP procedure if exists EP_ExtratoConta$$
CREATE procedure EP_ExtratoConta(
in p_id_conta INT,
in p_data_inicio DATE
)
BEGIN
	DECLARE saldo_atual DECIMAL(15,2);



select SUM( 
		case
			when tipo = 'CREDITO' then valor
			else -valor
		end
)
INTO saldo_atual
FROM Transacoes 
where id_conta = p_id_conta;

	
select p_id_conta as 'ID_Conta',
       saldo_atual as 'Saldo_Atual';
    
select
	   id_transacao as 'ID_transacao',
	   tipo as 'Tipo_Transacao',
       valor as 'Valor_Transacao',
	   data_transacao as 'Data_Transacao'
FROM Transacoes 
where id_conta = p_id_conta
	and data_transacao >= p_data_inicio
	order by data_transacao desc
    limit 10; 

END$$

DELIMITER ;

CALL EP_ExtratoConta(1, DATE_SUB(CURDATE(), INTERVAL 30 DAY));
