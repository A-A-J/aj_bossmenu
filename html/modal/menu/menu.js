import { formatMoney } from '../functions/format.js';

export function loadMenuStats(data) {
    document.getElementById('balanceValue').innerText = formatMoney(data.stats.balance);
    document.getElementById('dailyRevenueValue').innerText = formatMoney(data.stats.dailyRevenue);
    document.getElementById('employeesValue').innerText = data.stats.employees;
    document.getElementById('onlineValue').innerText = 'Online: ' + data.stats.onlineEmployees;
    document.getElementById('vehiclesValue').innerText = data.stats.vehicles;
    document.getElementById('garageValue').innerText = 'In Garage: ' + data.stats.garageVehicles;

    const jobInfo = document.getElementById('jobInfo');

    jobInfo.innerHTML = `
        <div class="info-row"><span>Job Name</span><strong>${data.job.name}</strong></div>
        <div class="info-row"><span>Job Label</span><strong>${data.job.label}</strong></div>
        <div class="info-row"><span>Grade</span><strong>${data.job.grade}</strong></div>
        <div class="info-row"><span>Members</span><strong>${data.job.members}</strong></div>
        <div class="info-row"><span>Created</span><strong>${data.job.created}</strong></div>
    `;
}
