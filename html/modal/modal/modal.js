let activePayload = null;
let activeSubmit = null;

export function openModal(options = {}) {
    const modal = document.getElementById('appModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalSave = document.getElementById('modalSave');
    const modalCancel = document.getElementById('modalCancel');

    if (!modal || !modalTitle || !modalBody || !modalSave || !modalCancel) return;

    activePayload = options.payload || null;
    activeSubmit = typeof options.onSubmit === 'function' ? options.onSubmit : null;

    modalTitle.innerText = options.title || 'Modal';
    modalBody.innerHTML = options.content || '';
    modalSave.innerText = options.saveText || 'Save';
    modalCancel.innerText = options.cancelText || 'Cancel';

    modal.classList.add('show');

    if (typeof options.onOpen === 'function') {
        options.onOpen(modal, activePayload);
    }
}

export function closeModal() {
    const modal = document.getElementById('appModal');

    if (!modal) return;

    modal.classList.remove('show');
    activePayload = null;
    activeSubmit = null;
}

export function initModal() {
    document.getElementById('modalClose')?.addEventListener('click', closeModal);
    document.getElementById('modalCancel')?.addEventListener('click', closeModal);

    document.getElementById('modalSave')?.addEventListener('click', () => {
        if (activeSubmit) {
            activeSubmit(activePayload);
        }

        closeModal();
    });

    document.getElementById('appModal')?.addEventListener('click', event => {
        if (event.target.id === 'appModal') closeModal();
    });
}
