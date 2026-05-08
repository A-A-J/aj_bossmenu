export function loadClothing(data) {
    const container = document.querySelector('.clothing-list');

    if (!container) return;

    container.innerHTML = '';

    data.clothes.forEach(clothe => {
        container.innerHTML += `
            <div class="list-item">
                <div>
                    <strong>${clothe.name}</strong>
                    <p>${clothe.grade}</p>
                </div>
            </div>
        `;
    });
}
