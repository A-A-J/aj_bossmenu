AJ = AJ or {}

AJ.FakeData = {
    player = { name = 'John Smith', grade = 'Boss', workTime = '23h 45m', avatar = 'https://i.imgur.com/3ZQ3Z6v.png' },
    job = { name = 'Example Job', label = 'example', grade = 'Boss', members = '12 / 50', created = 'May 1, 2024' },
    grades = { { id = 0, name = 'Recruit' }, { id = 1, name = 'Employee' }, { id = 2, name = 'Manager' }, { id = 3, name = 'Boss' } },
    citizens = { { id = '1001', name = 'Ahmed Alharbi' }, { id = '1002', name = 'Fahad Alotaibi' }, { id = '1003', name = 'Salem Alqahtani' }, { id = '1004', name = 'Nasser Aldosari' }, { id = '1005', name = 'Turki Alghamdi' } },
    stats = { balance = 45250, employees = 12, onlineEmployees = 5, vehicles = 8, garageVehicles = 6, dailyRevenue = 12500 },
    finances = {
        summary = { totalIncome = 68500, totalExpense = 23250, balance = 45250, lastWithdraw = 'Mike Johnson', lastDeposit = 'John Smith' },
        chart = {
            day = { income = 12500, expense = 2500 },
            week = { income = 34200, expense = 12600 },
            month = { income = 68500, expense = 23250 },
            year = { income = 520000, expense = 210000 }
        },
        transactions = {
            { id = 1, type = 'Deposit', amount = 12500, by = 'John Smith', time = 'Today 14:20', note = 'Daily sales income' },
            { id = 2, type = 'Withdraw', amount = 2500, by = 'Mike Johnson', time = 'Today 12:05', note = 'Vehicle maintenance' },
            { id = 3, type = 'Expense', amount = 7600, by = 'System', time = 'Yesterday 22:00', note = 'Salary paid' },
            { id = 4, type = 'Deposit', amount = 9200, by = 'John Smith', time = 'Yesterday 18:30', note = 'Store revenue' }
        }
    },
    employees = { { name = 'John Smith', grade = 'Boss', status = 'Online', hours = '23h 45m' }, { name = 'Mike Johnson', grade = 'Manager', status = 'Online', hours = '12h 10m' }, { name = 'David Miller', grade = 'Employee', status = 'Offline', hours = '7h 30m' }, { name = 'Robert Wilson', grade = 'Recruit', status = 'Online', hours = '2h 15m' } },
    store = { { item = 'Radio', price = 250, stock = 35 }, { item = 'Repair Kit', price = 500, stock = 18 }, { item = 'Armor', price = 1200, stock = 10 }, { item = 'Bandage', price = 80, stock = 60 } },
    vehicles = { { label = 'Sultan RS', plate = 'AJ 1020', status = 'Available' }, { label = 'Buffalo STX', plate = 'AJ 2211', status = 'Out' }, { label = 'Granger', plate = 'AJ 3344', status = 'Maintenance' } },
    clothes = { { name = 'Boss Outfit', grade = 'Boss' }, { name = 'Manager Outfit', grade = 'Manager' }, { name = 'Employee Outfit', grade = 'Employee' } },
    settings = { language = 'English', theme = 'Dark Purple', allowWithdraw = true, allowHire = true, allowVehicleSpawn = true },
    logs = { { title = 'John Smith joined the job', time = '5 min ago', icon = 'fa-user-plus' }, { title = 'Vehicle Sultan RS spawned', time = '15 min ago', icon = 'fa-car' }, { title = '$12,500 added to society', time = '30 min ago', icon = 'fa-dollar-sign' }, { title = 'Mike Johnson was hired', time = '1 hour ago', icon = 'fa-user-check' } }
}

function AJ.GetFakeBossMenuData()
    return AJ.FakeData
end
