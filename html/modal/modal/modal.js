let activeEmployee = null;

export function openModal(title, content, employee = null) {
    activeEmployee = employee;

    const modal = document.getElementById('appModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    if (!modal || !modalTitle || !modalBody) return;

    modalTitle.innerText = title;
    modalBody.innerHTML = content;
    modal.classList.add('show');
}

export function closeModal() {
    const modal = document.getElementById('appModal');

    if (!modal) return;

    modal.classList.remove('show');
    activeEmployee = null;
}

export function initModal() {
    document.getElementById('modalClose')?.addEventListener('click', closeModal);
    document.getElementById('modalCancel')?.addEventListener('click', closeModal);
    document.getElementById('modalSave')?.addEventListener('click', () => {
        closeModal();
    });

    document.getElementById('appModal')?.addEventListener('click', event => {
        if (event.target.id === 'appModal') closeModal();
    });
}
