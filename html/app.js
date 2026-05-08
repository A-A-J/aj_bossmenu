import { loadMenuStats } from './modal/menu/menu.js';
import { loadMemberData } from './modal/member/member.js';
import { loadLogs } from './modal/logs/logs.js';
import { loadFinance } from './modal/finance/finance.js';
import { loadEmployees } from './modal/employees/employees.js';
import { loadStore } from './modal/store/store.js';
import { loadVehicles } from './modal/vehicles/vehicles.js';
import { loadClothing } from './modal/clothing/clothing.js';
import { loadSettings } from './modal/settings/settings.js';
import { initRouter } from './modal/router/router.js';
import { showToast } from './modal/notifications/toast.js';
import { initModal } from './modal/modal/modal.js';

function closeMenu() {
    fetch(`https://${GetParentResourceName()}/close`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    });
}

window.addEventListener('message', function(event) {
    if (event.data.action === 'open') {
        document.body.style.display = 'block';

        const data = event.data.data;

        if (!data) return;

        loadMemberData(data);
        loadMenuStats(data);
        loadLogs(data.logs);
        loadFinance(data);
        loadEmployees(data);
        loadStore(data);
        loadVehicles(data);
        loadClothing(data);
        loadSettings(data);

        initRouter();
        initModal();

        showToast('Boss Menu Loaded');
    }

    if (event.data.action === 'close') {
        document.body.style.display = 'none';
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === 'Escape') {
        closeMenu();
    }
});

document.getElementById('closeBtn')?.addEventListener('click', closeMenu);
