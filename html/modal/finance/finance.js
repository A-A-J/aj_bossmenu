import { openModal } from '../modal/modal.js';

function openFinanceModal(type) {
    openModal({
        title: `${type} Funds`,
        saveText: type,
        payload: { type },
        content: `
            <div class="hire-form">
                <div class="form-group">
                    <label>Amount</label>
                    <input id="financeAmount" type="number" min="1" required placeholder="Enter amount...">
                </div>

                <div class="form-group">
                    <label>Reason</label>
                    <textarea id="financeReason" required placeholder="Write reason here..."></textarea>
                </div>

                <p class="modal-note">Amount and reason are required before sending this ${type.toLowerCase()} request.</p>
            </div>
        `,
        onSubmit: () => {}
    });
}

export function loadFinance(data) {
    const container = document.querySelector('.finance-list');

    if (!container) return;

    const summary = data.finances.summary;
    const chart = data.finances.chart;

    container.innerHTML = `
        <div class="finance-toolbar">
            <button class="finance-btn deposit" id="depositBtn">
                <i class="fa-solid fa-arrow-down"></i>
                Deposit
            </button>

            <button class="finance-btn withdraw" id="withdrawBtn">
                <i class="fa-solid fa-arrow-up"></i>
                Withdraw
            </button>
        </div>

        <div class="finance-grid">
            <section class="finance-chart panel">
                <div class="chart-header">
                    <h2>Finance Analytics</h2>

                    <div class="chart-filters">
                        <button class="active">Day</button>
                        <button>Week</button>
                        <button>Month</button>
                        <button>Year</button>
                    </div>
                </div>

                <div class="chart-bars">
                    <div class="chart-column">
                        <div class="chart-value income" style="height: 82%"></div>
                        <span>Income</span>
                        <strong>$${chart.day.income}</strong>
                    </div>

                    <div class="chart-column">
                        <div class="chart-value expense" style="height: 32%"></div>
                        <span>Expense</span>
                        <strong>$${chart.day.expense}</strong>
                    </div>
                </div>
            </section>

            <section class="finance-stats panel">
                <h2>Statistics</h2>

                <div class="finance-stat-row"><span>Total Income</span><strong>$${summary.totalIncome}</strong></div>
                <div class="finance-stat-row"><span>Total Expense</span><strong>$${summary.totalExpense}</strong></div>
                <div class="finance-stat-row"><span>Society Balance</span><strong>$${summary.balance}</strong></div>
                <div class="finance-stat-row"><span>Last Withdraw</span><strong>${summary.lastWithdraw}</strong></div>
                <div class="finance-stat-row"><span>Last Deposit</span><strong>${summary.lastDeposit}</strong></div>
            </section>
        </div>

        <section class="panel finance-history">
            <div class="table-header">
                <h2>Transactions History</h2>
            </div>

            <table class="finance-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Operation</th>
                        <th>By</th>
                        <th>Time</th>
                        <th>Notes</th>
                    </tr>
                </thead>

                <tbody>
                    ${data.finances.transactions.map(transaction => `
                        <tr>
                            <td>${transaction.id}</td>
                            <td>${transaction.type}</td>
                            <td>${transaction.by}</td>
                            <td>${transaction.time}</td>
                            <td>${transaction.note}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </section>
    `;

    document.getElementById('depositBtn')?.addEventListener('click', () => openFinanceModal('Deposit'));
    document.getElementById('withdrawBtn')?.addEventListener('click', () => openFinanceModal('Withdraw'));
}
