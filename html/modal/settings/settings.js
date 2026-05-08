export function loadSettings(data) {
    const container = document.querySelector('.settings-list');

    if (!container) return;

    container.innerHTML = `
        <div class="list-item">
            <strong>Language</strong>
            <p>${data.settings.language}</p>
        </div>

        <div class="list-item">
            <strong>Theme</strong>
            <p>${data.settings.theme}</p>
        </div>

        <div class="list-item">
            <strong>Allow Withdraw</strong>
            <p>${data.settings.allowWithdraw}</p>
        </div>

        <div class="list-item">
            <strong>Allow Hire</strong>
            <p>${data.settings.allowHire}</p>
        </div>
    `;
}
