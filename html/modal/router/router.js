const pages = {
    home: { id: 'homePage', title: 'Dashboard', desc: 'Manage your job and employees.' },
    finance: { id: 'financePage', title: 'Finance', desc: 'Manage deposits, withdrawals and transactions.' },
    employees: { id: 'employeesPage', title: 'Employees', desc: 'Manage members, grades and work status.' },
    store: { id: 'storePage', title: 'Store', desc: 'Manage job inventory and stock.' },
    vehicles: { id: 'vehiclesPage', title: 'Vehicles', desc: 'Manage job vehicles and garage status.' },
    clothing: { id: 'clothingPage', title: 'Clothing', desc: 'Manage job outfits by grade.' },
    logs: { id: 'logsPage', title: 'Logs', desc: 'Review job activity history.' },
    settings: { id: 'settingsPage', title: 'Settings', desc: 'Manage boss menu permissions and preferences.' }
};

export function openPage(pageName = 'home') {
    const page = pages[pageName] || pages.home;

    document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.menu button').forEach(el => el.classList.remove('active'));

    document.getElementById(page.id)?.classList.add('active');
    document.querySelector(`[data-page="${pageName}"]`)?.classList.add('active');

    document.getElementById('pageTitle').innerText = page.title;
    document.getElementById('pageDescription').innerText = page.desc;
}

export function initRouter() {
    document.querySelectorAll('[data-page]').forEach(button => {
        button.addEventListener('click', () => openPage(button.dataset.page));
    });

    document.querySelectorAll('[data-open-page]').forEach(button => {
        button.addEventListener('click', () => openPage(button.dataset.openPage));
    });
}
