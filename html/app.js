import { loadMenuStats } from './modal/menu/menu.js';
import { loadMemberData } from './modal/member/member.js';
import { loadLogs } from './modal/logs/logs.js';

window.addEventListener('message', function(event) {
    if (event.data.action === 'open') {
        document.body.style.display = 'block';

        const data = event.data.data;

        if (!data) return;

        loadMemberData(data);
        loadMenuStats(data);
        loadLogs(data.logs);
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
