const elementoSaldo = document.getElementById('saldo-conta')
const lista = document.getElementById('lista-transacoes')

    const extrato = {
        saldo: 11400.50,
        transacoes: [
            {tipo: 'venda', descricao: 'Osciloscopio Eletrotechnix AP400', valor: -6000},
            {tipo: 'venda', descricao: 'Arduino mega', valor: 289.90},
            {tipo: 'venda', descricao: 'Conversor Serial', valor: 50},
            {tipo: 'reembolso', descricao: 'reembolso de cliente', valor: 50},
            {tipo: 'taxa', descricao: 'Taxa de cambio na conversão USD', valor: 30},
        ]
    }



elementoSaldo.textContent = `Saldo: ${extrato.saldo.toLocaleString('pt-BR',{
    style: 'currency',
    currency: 'BRL'

})}`

extrato.transacoes.forEach( key => {
    const itemLista = document.createElement('li')
    itemLista.classList.add('transacao')

    // Validacoes de valores
    if (Math.abs(key) >= 5000) {
       itemLista.classList.add('destaque') 
    }

    const ValorFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
    }).format(key.valor);

    // testa a classe de maior que zero
    let valor;
    if (key.valor > 0) 
    {
       valor = 'negativo' 
    }
    else
    {
        valor = ''
    }

    itemLista.innerHTML = `
    <div class="transacao-info">
        <span>${key.tipo} ->  ${key.descricao}</span>
        <small>${key.valor}</small>
        <span class="transacao-valor ${valor}">
        ${ValorFormatado}
    `;

    lista.appendChild(itemLista);

}) // Fim do foreach