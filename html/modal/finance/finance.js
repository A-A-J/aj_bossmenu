export function loadFinance(data) {
    const container = document.querySelector('.finance-list');

    if (!container) return;

    container.innerHTML = '';

    data.finances.transactions.forEach(transaction => {
        container.innerHTML += `
            <div class="list-item">
                <div>
                    <strong>${transaction.type}</strong>
                    <p>${transaction.by}</p>
                </div>

                <div>
                    <strong>$${transaction.amount}</strong>
                    <p>${transaction.time}</p>
                </div>
            </div>
        `;
    });
}
