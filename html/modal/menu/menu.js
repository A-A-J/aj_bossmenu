import { formatMoney } from '../functions/format.js';

export function loadMenuStats(data) {
    const cards = document.querySelector('#homePage .cards');

    if (cards) {
        cards.innerHTML = `
            <div class="card purple"><i class="fa-solid fa-wallet"></i><div><h2 id="balanceValue">${formatMoney(data.stats.balance)}</h2><p>Balance</p></div></div>
            <div class="card green"><i class="fa-solid fa-dollar-sign"></i><div><h2 id="dailyRevenueValue">${formatMoney(data.stats.dailyRevenue)}</h2><p>Daily Revenue</p><strong>↑ 12.5%</strong></div></div>
            <div class="card blue"><i class="fa-solid fa-users"></i><div><h2 id="employeesValue">${data.stats.employees}</h2><p>Employees</p><strong id="onlineValue">Online: ${data.stats.onlineEmployees}</strong></div></div>
            <div class="card orange"><i class="fa-solid fa-car"></i><div><h2 id="vehiclesValue">${data.stats.vehicles}</h2><p>Vehicles</p><strong id="garageValue">In Garage: ${data.stats.garageVehicles}</strong></div></div>
        `;
    }

    const jobInfo = document.getElementById('jobInfo');

    if (!jobInfo) return;

    jobInfo.innerHTML = `
        <div class="info-row"><span>Job Name</span><strong>${data.job.name}</strong></div>
        <div class="info-row"><span>Job Label</span><strong>${data.job.label}</strong></div>
        <div class="info-row"><span>Grade</span><strong>${data.job.grade}</strong></div>
        <div class="info-row"><span>Members</span><strong>${data.job.members}</strong></div>
        <div class="info-row"><span>Created</span><strong>${data.job.created}</strong></div>
    `;
}
