export function loadVehicles(data) {
    const container = document.querySelector('.vehicles-list');

    if (!container) return;

    container.innerHTML = '';

    data.vehicles.forEach(vehicle => {
        container.innerHTML += `
            <div class="list-item">
                <div>
                    <strong>${vehicle.label}</strong>
                    <p>${vehicle.plate}</p>
                </div>

                <div>
                    <strong>${vehicle.status}</strong>
                </div>
            </div>
        `;
    });
}
