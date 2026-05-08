export function loadStore(data) {
    const container = document.querySelector('.store-list');

    if (!container) return;

    container.innerHTML = '';

    data.store.forEach(item => {
        container.innerHTML += `
            <div class="list-item">
                <div>
                    <strong>${item.item}</strong>
                    <p>Stock: ${item.stock}</p>
                </div>

                <div>
                    <strong>$${item.price}</strong>
                </div>
            </div>
        `;
    });
}
