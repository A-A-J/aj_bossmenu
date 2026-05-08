import { openModal } from '../modal/modal.js';

function openHireModal(data) {
    const grades = data.grades.map(grade => {
        return `<option value="${grade.id}">${grade.name}</option>`;
    }).join('');

    const citizens = data.citizens.map(citizen => {
        return `
            <div class="citizen-option" data-name="${citizen.name}" data-id="${citizen.id}">
                <strong>${citizen.name}</strong>
                <span>#${citizen.id}</span>
            </div>
        `;
    }).join('');

    openModal('Hire Employee', `
        <div class="hire-form">
            <div class="form-group citizen-group">
                <label>Citizen Name / ID</label>

                <input type="text" id="citizenSearch" placeholder="Search citizen by name or ID...">

                <div class="citizen-results" id="citizenResults">
                    ${citizens}
                </div>
            </div>

            <div class="form-group">
                <label>Employee Grade</label>

                <select id="gradeSelect">
                    ${grades}
                </select>
            </div>
        </div>
    `);

    const searchInput = document.getElementById('citizenSearch');
    const results = document.getElementById('citizenResults');

    searchInput?.addEventListener('input', () => {
        const value = searchInput.value.toLowerCase();

        results.querySelectorAll('.citizen-option').forEach(option => {
            const name = option.dataset.name.toLowerCase();
            const id = option.dataset.id.toLowerCase();

            if (name.includes(value) || id.includes(value)) {
                option.style.display = 'flex';
            } else {
                option.style.display = 'none';
            }
        });
    });

    results.querySelectorAll('.citizen-option').forEach(option => {
        option.addEventListener('click', () => {
            searchInput.value = `${option.dataset.name} (#${option.dataset.id})`;
            results.style.display = 'none';
        });
    });
}

export function loadEmployees(data) {
    const container = document.querySelector('.employees-list');

    if (!container) return;

    container.innerHTML = `
        <div class="employee-header">
            <button class="hire-btn" id="hireEmployeeBtn">
                <i class="fa-solid fa-user-plus"></i>
                Hire Employee
            </button>
        </div>

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

    document.getElementById('hireEmployeeBtn')?.addEventListener('click', () => {
        openHireModal(data);
    });

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

        tbody.appendChild(row);
    });
}
