export function loadEmployees(data) {
    const container = document.querySelector('.employees-list');

    if (!container) return;

    container.innerHTML = '';

    data.employees.forEach(employee => {
        container.innerHTML += `
            <div class="list-item">
                <div>
                    <strong>${employee.name}</strong>
                    <p>${employee.grade}</p>
                </div>

                <div>
                    <strong>${employee.status}</strong>
                    <p>${employee.hours}</p>
                </div>
            </div>
        `;
    });
}
