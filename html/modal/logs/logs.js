export function loadLogs(logs) {
    const homeLogs = document.getElementById('homeLogs');
    const logsList = document.querySelector('.logs-list');

    if (homeLogs) {
        homeLogs.innerHTML = '';

        logs.forEach(log => {
            homeLogs.innerHTML += `
                <div class="log-item">
                    <span><i class="fa-solid ${log.icon}"></i> ${log.title}</span>
                    <small>${log.time}</small>
                </div>
            `;
        });
    }

    if (logsList) {
        logsList.innerHTML = '';

        logs.forEach(log => {
            logsList.innerHTML += `
                <div class="log-item">
                    <span><i class="fa-solid ${log.icon}"></i> ${log.title}</span>
                    <small>${log.time}</small>
                </div>
            `;
        });
    }
}
