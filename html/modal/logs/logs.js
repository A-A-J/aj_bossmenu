export function loadLogs(logs) {
    const logsContainer = document.querySelector('.logs');

    logsContainer.innerHTML = '<h2>Recent Logs</h2>';

    logs.forEach(log => {
        logsContainer.innerHTML += `
            <div class="log-item">
                <span><i class="fa-solid ${log.icon}"></i> ${log.title}</span>
                <small>${log.time}</small>
            </div>
        `;
    });
}
