import { formatMoney, setText } from '../functions/format.js';

export function loadMenuStats(data) {
    const cards = document.querySelectorAll('.card h2');

    cards[0].innerText = formatMoney(data.stats.balance);
    cards[1].innerText = data.stats.employees;
    cards[2].innerText = data.stats.vehicles;

    setText('.info-row:nth-child(2) strong', data.job.name);
    setText('.info-row:nth-child(3) strong', data.job.grade);
    setText('.info-row:nth-child(4) strong', data.job.members);
}
