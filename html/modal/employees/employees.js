import { openModal } from '../modal/modal.js';

function gradesOptions(data, selected = '') {
    return data.grades.map(grade => `<option value="${grade.id}" ${grade.name === selected ? 'selected' : ''}>${grade.name}</option>`).join('');
}

function bindCitizenSearch() {
    const searchInput = document.getElementById('citizenSearch');
    const results = document.getElementById('citizenResults');

    if (!searchInput || !results) return;

    results.style.display = 'none';

    searchInput.addEventListener('input', () => {
        const value = searchInput.value.trim().toLowerCase();
        let found = 0;

        if (value.length === 0) {
            results.style.display = 'none';
            return;
        }

        results.querySelectorAll('.citizen-option').forEach(option => {
            const name = option.dataset.name.toLowerCase();
            const id = option.dataset.id.toLowerCase();
            const matched = name.includes(value) || id.includes(value);
            option.style.display = matched ? 'flex' : 'none';
            if (matched) found++;
        });

        results.style.display = found > 0 ? 'block' : 'none';
    });

    results.querySelectorAll('.citizen-option').forEach(option => {
        option.addEventListener('click', () => {
            searchInput.value = `${option.dataset.name} (#${option.dataset.id})`;
            searchInput.dataset.citizenId = option.dataset.id;
            results.style.display = 'none';
        });
    });
}

function openHireModal(data) {
    const citizens = data.citizens.map(citizen => `
        <div class="citizen-option" data-name="${citizen.name}" data-id="${citizen.id}">
            <strong>${citizen.name}</strong>
            <span>#${citizen.id}</span>
        </div>
    `).join('');

    openModal({
        title: 'Hire Employee',
        saveText: 'Send Hire Request',
        payload: data,
        content: `
            <div class="hire-form">
                <div class="form-group citizen-group">
                    <label>Citizen Name / ID</label>
                    <input type="text" id="citizenSearch" placeholder="Type citizen name or ID..." autocomplete="off">
                    <div class="citizen-results" id="citizenResults">${citizens}</div>
                </div>
                <div class="form-group">
                    <label>Employee Grade</label>
                    <select id="gradeSelect">${gradesOptions(data)}</select>
                </div>
                <p class="modal-note">Select a citizen from the search menu, then send a hire request.</p>
            </div>
        `,
        onOpen: bindCitizenSearch,
        onSubmit: () => {}
    });
}

function openFireModal(employee) {
    openModal({
        title: 'Fire Employee',
        saveText: 'Confirm Fire',
        payload: employee,
        content: `
            <div class="warning-box">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <div>
                    <h3>Confirm employee dismissal</h3>
                    <p>Are you sure you want to fire <strong>${employee.name}</strong>? This action should be confirmed before sending it to the server.</p>
                </div>
            </div>
        `,
        onSubmit: () => {}
    });
}

function openPromoteModal(data, employee) {
    openModal({
        title: 'Promote Employee',
        saveText: 'Save Promotion',
        payload: employee,
        content: `
            <div class="hire-form">
                <div class="form-group">
                    <label>Employee</label>
                    <input type="text" value="${employee.name}" disabled>
                </div>
                <div class="form-group">
                    <label>New Grade</label>
                    <select id="promoteGrade">${gradesOptions(data, employee.grade)}</select>
                </div>
            </div>
        `,
        onSubmit: () => {}
    });
}

function openPermissionsModal(employee) {
    openModal({
        title: 'Employee Permissions',
        saveText: 'Save Permissions',
        payload: employee,
        content: `
            <div class="checkbox-grid">
                <label><input type="checkbox"> Manage Employees</label>
                <label><input type="checkbox"> Manage Finance</label>
                <label><input type="checkbox"> Manage Vehicles</label>
                <label><input type="checkbox"> Manage Store</label>
                <label><input type="checkbox"> Manage Clothing</label>
                <label><input type="checkbox"> View Logs</label>
            </div>
            <p class="modal-note">You can select more than one permission for <strong>${employee.name}</strong>.</p>
        `,
        onSubmit: () => {}
    });
}

function openBadgesModal(employee) {
    openModal({
        title: 'Employee Badges',
        saveText: 'Save Badges',
        payload: employee,
        content: `
            <div class="checkbox-grid">
                <label><input type="checkbox"> Supervisor Badge</label>
                <label><input type="checkbox"> Training Badge</label>
                <label><input type="checkbox"> Finance Badge</label>
                <label><input type="checkbox"> Garage Badge</label>
                <label><input type="checkbox"> Store Badge</label>
                <label><input type="checkbox"> Senior Badge</label>
            </div>
            <p class="modal-note">You can select more than one badge for <strong>${employee.name}</strong>.</p>
        `,
        onSubmit: () => {}
    });
}

export function loadEmployees(data) {
    const container = document.querySelector('.employees-list');
    if (!container) return;

    container.innerHTML = `
        <div class="employee-header">
            <button class="hire-btn" id="hireEmployeeBtn"><i class="fa-solid fa-user-plus"></i> Hire Employee</button>
        </div>
        <table class="employee-table">
            <thead><tr><th>Name</th><th>Grade</th><th>Status</th><th>Hours</th><th>Actions</th></tr></thead>
            <tbody></tbody>
        </table>
        <div class="employee-footer-actions">
            <button class="hire-btn" id="hireEmployeeBottomBtn"><i class="fa-solid fa-user-plus"></i> Hire Employee</button>
        </div>
    `;

    document.getElementById('hireEmployeeBtn')?.addEventListener('click', () => openHireModal(data));
    document.getElementById('hireEmployeeBottomBtn')?.addEventListener('click', () => openHireModal(data));

    const tbody = container.querySelector('tbody');

    data.employees.forEach(employee => {
        const isCurrentPlayer = employee.name === data.player.name;
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.grade}</td>
            <td>${employee.status}</td>
            <td>${employee.hours}</td>
            <td>${!isCurrentPlayer ? `<div class="employee-actions"><button class="action-btn fire">Fire</button><button class="action-btn promote">Promote</button><button class="action-btn permissions">Permissions</button><button class="action-btn badges">Badges</button></div>` : '<span class="owner-badge">OWNER</span>'}</td>
        `;

        if (!isCurrentPlayer) {
            row.querySelector('.fire')?.addEventListener('click', () => openFireModal(employee));
            row.querySelector('.promote')?.addEventListener('click', () => openPromoteModal(data, employee));
            row.querySelector('.permissions')?.addEventListener('click', () => openPermissionsModal(employee));
            row.querySelector('.badges')?.addEventListener('click', () => openBadgesModal(employee));
        }

        tbody.appendChild(row);
    });
}
