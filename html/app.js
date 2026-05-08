window.addEventListener('message', function(event) {
    if (event.data.action === 'open') {
        document.body.style.display = 'block';

        const data = event.data.data;

        if (!data) return;

        document.querySelector('.profile h3').innerText = data.player.name;
        document.querySelector('.profile span').innerText = data.player.grade;
        document.querySelector('.worktime span').innerText = data.player.workTime;
        document.querySelector('.profile img').src = data.player.avatar;

        const cards = document.querySelectorAll('.card h2');

        cards[0].innerText = '$' + data.stats.balance.toLocaleString();
        cards[1].innerText = data.stats.employees;
        cards[2].innerText = data.stats.vehicles;

        const infoRows = document.querySelectorAll('.info-row strong');

        infoRows[0].innerText = data.job.name;
        infoRows[1].innerText = data.job.grade;
        infoRows[2].innerText = data.job.members;

        const logsContainer = document.querySelector('.logs');

        logsContainer.innerHTML = '<h2>Recent Logs</h2>';

        data.logs.forEach(log => {
            logsContainer.innerHTML += `
                <div class="log-item">
                    <span><i class="fa-solid ${log.icon}"></i> ${log.title}</span>
                    <small>${log.time}</small>
                </div>
            `;
        });
    }

    if (event.data.action === 'close') {
        document.body.style.display = 'none';
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === 'Escape') {
        fetch(`https://${GetParentResourceName()}/close`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
    }
});
