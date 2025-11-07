localStorage.removeItem("cart");
localStorage.clear();

let cart = JSON.parse(localStorage.getItem('cart')) || [];



// Funcao que atualiza os numeros do carrinho
function updateCartCount() {
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById("cart-count").textContent = count;
}

// rendereiza os items no terminal ao inves de retornar um array
function renderItems(itemArray) {
    itemArray.forEach(item => {

    console.log(`Produto: ${item.name} | Preço: ${item.price} | Quantidade: ${item.quantity}`);
    });
}


// Seleciona todos os botões "Adicionar Carrinho"
const addButtons = document.querySelectorAll(".add-to-cart");


addButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault(); // Evita que a pagina recarregue ao clicar em adicionar

        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);

        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount(); // Adiciona o item no carrinho 

        console.log("Carrinho atualizado:", cart);
        alert(`${name} adicionado ao carrinho!`);

        renderItems(cart);
    });
});

