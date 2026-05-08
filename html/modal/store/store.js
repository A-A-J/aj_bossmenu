let cart = [];

function formatMoney(value) {
    return '$' + Number(value || 0).toLocaleString();
}

function renderCart() {
    const cartList = document.getElementById('storeCartList');
    const totalElement = document.getElementById('storeCartTotal');

    if (!cartList || !totalElement) return;

    if (cart.length === 0) {
        cartList.innerHTML = '<div class="empty-cart">No items selected</div>';
        totalElement.innerText = '$0';
        return;
    }

    cartList.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <strong>${item.item}</strong>
                <span>${formatMoney(item.price)} x ${item.count}</span>
            </div>

            <div class="cart-controls">
                <button data-action="minus" data-item="${item.item}">-</button>
                <b>${item.count}</b>
                <button data-action="plus" data-item="${item.item}">+</button>
                <button class="remove" data-action="remove" data-item="${item.item}"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((amount, item) => amount + (item.price * item.count), 0);
    totalElement.innerText = formatMoney(total);

    cartList.querySelectorAll('[data-action]').forEach(button => {
        button.addEventListener('click', event => {
            event.stopPropagation();

            const action = button.dataset.action;
            const itemName = button.dataset.item;
            const cartItem = cart.find(item => item.item === itemName);

            if (!cartItem) return;

            if (action === 'plus') cartItem.count++;
            if (action === 'minus') cartItem.count--;
            if (action === 'remove') cartItem.count = 0;

            cart = cart.filter(item => item.count > 0);
            renderCart();
        });
    });
}

function addToCart(item) {
    const existing = cart.find(cartItem => cartItem.item === item.item);

    if (existing) {
        existing.count++;
    } else {
        cart.push({
            item: item.item,
            price: item.price,
            count: 1
        });
    }

    renderCart();
}

export function loadStore(data) {
    const container = document.querySelector('.store-list');

    if (!container) return;

    cart = [];

    container.innerHTML = `
        <div class="store-layout">
            <section class="store-items-panel panel">
                <div class="store-section-header">
                    <h2>Store Items</h2>
                    <p>Select items to add them to the purchase list.</p>
                </div>

                <div class="store-slots">
                    ${data.store.map(item => `
                        <button class="store-slot" data-item="${item.item}">
                            <div class="store-slot-icon">
                                <i class="fa-solid fa-box"></i>
                            </div>

                            <div class="store-slot-info">
                                <strong>${item.item}</strong>
                                <span>${formatMoney(item.price)}</span>
                            </div>
                        </button>
                    `).join('')}
                </div>
            </section>

            <aside class="store-cart-panel panel">
                <div class="store-section-header">
                    <h2>Purchase List</h2>
                    <p>Selected items</p>
                </div>

                <div class="store-cart-list" id="storeCartList"></div>

                <div class="store-cart-footer">
                    <div class="store-total-row">
                        <span>Total</span>
                        <strong id="storeCartTotal">$0</strong>
                    </div>

                    <button class="store-buy-btn" id="storeBuyBtn">
                        <i class="fa-solid fa-cart-shopping"></i>
                        Buy
                    </button>

                    <button class="store-cancel-btn" id="storeCancelBtn">
                        Cancel
                    </button>
                </div>
            </aside>
        </div>
    `;

    container.querySelectorAll('.store-slot').forEach(slot => {
        slot.addEventListener('click', () => {
            const item = data.store.find(storeItem => storeItem.item === slot.dataset.item);
            if (item) addToCart(item);
        });
    });

    document.getElementById('storeCancelBtn')?.addEventListener('click', () => {
        cart = [];
        renderCart();
    });

    document.getElementById('storeBuyBtn')?.addEventListener('click', () => {
        if (cart.length === 0) return;
        cart = [];
        renderCart();
    });

    renderCart();
}
