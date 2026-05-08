import { openModal } from '../modal/modal.js';

export function loadEmployees(data) {
    const container = document.querySelector('.employees-list');

    if (!container) return;

    container.innerHTML = `
        <table class="employee-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Status</th>
                    <th>Hours</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    `;

    const tbody = container.querySelector('tbody');

    data.employees.forEach(employee => {
        const isCurrentPlayer = employee.name === data.player.name;

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.grade}</td>
            <td>${employee.status}</td>
            <td>${employee.hours}</td>
            <td>
                ${!isCurrentPlayer ? `
                    <div class="employee-actions">
                        <button class="action-btn fire">Fire</button>
                        <button class="action-btn promote">Promote</button>
                        <button class="action-btn permissions">Permissions</button>
                        <button class="action-btn badges">Badges</button>
                    </div>
                ` : '<span class="owner-badge">OWNER</span>'}
            </td>
        `;

        if (!isCurrentPlayer) {
            row.querySelector('.fire')?.addEventListener('click', () => {
                openModal('Fire Employee', `<p>Are you sure you want to fire <strong>${employee.name}</strong>?</p>`, employee);
            });

            row.querySelector('.promote')?.addEventListener('click', () => {
                openModal('Promote Employee', `<p>Select a new grade for <strong>${employee.name}</strong>.</p>`, employee);
            });

            row.querySelector('.permissions')?.addEventListener('click', () => {
                openModal('Employee Permissions', `<p>Manage permissions for <strong>${employee.name}</strong>.</p>`, employee);
            });

            row.querySelector('.badges')?.addEventListener('click', () => {
                openModal('Employee Badges', `<p>Manage badges for <strong>${employee.name}</strong>.</p>`, employee);
            });
        }

        tbody.appendChild(row);
    });
}
