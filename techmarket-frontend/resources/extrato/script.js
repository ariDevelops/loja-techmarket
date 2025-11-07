const elementoSaldo = document.getElementById('saldo-conta');
const lista = document.getElementById('lista-transacoes');

// Recupera carrinho salvo
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Se não tiver itens no carrinho, mostra mensagem
if (cart.length === 0) {
    elementoSaldo.textContent = "Nenhuma compra registrada";
} else {

    // Calcula total gasto (valor negativo no extrato)
    const totalGasto = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const saldoInicial = 10000; // saldo inicial fictício
    const saldoAtual = saldoInicial - totalGasto;

    elementoSaldo.textContent = `Saldo: ${saldoAtual.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })}`;

    // Renderiza cada transação = item do carrinho
    cart.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('transacao');

        const valorFormatado = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(item.price * item.quantity);

        // Se valor gasto for > 5000 → destaque
        if ((item.price * item.quantity) > 5000) {
            li.classList.add('destaque');
        }

        li.innerHTML = `
            <div class="transacao-info">
                <span>Compra → ${item.name}</span>
                <small>Qtd: ${item.quantity}</small>
            </div>
            <span class="transacao-valor negativo">${valorFormatado}</span>
        `;

        lista.appendChild(li);
    });
}
