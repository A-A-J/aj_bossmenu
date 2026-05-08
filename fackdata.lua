AJ = AJ or {}

AJ.FakeData = {
    player = {
        name = 'John Smith',
        grade = 'Boss',
        workTime = '23h 45m',
        avatar = 'https://i.imgur.com/3ZQ3Z6v.png'
    },

    job = {
        name = 'Example Job',
        label = 'example',
        grade = 'Boss',
        members = '12 / 50',
        created = 'May 1, 2024'
    },

    stats = {
        balance = 45250,
        employees = 12,
        onlineEmployees = 5,
        vehicles = 8,
        garageVehicles = 6,
        dailyRevenue = 12500
    },

    logs = {
        {
            title = 'John Smith joined the job',
            time = '5 min ago',
            icon = 'fa-user-plus'
        },
        {
            title = 'Vehicle Sultan RS spawned',
            time = '15 min ago',
            icon = 'fa-car'
        },
        {
            title = '$12,500 added to society',
            time = '30 min ago',
            icon = 'fa-dollar-sign'
        },
        {
            title = 'Mike Johnson was hired',
            time = '1 hour ago',
            icon = 'fa-user-check'
        }
    }
}

function AJ.GetFakeBossMenuData()
    return AJ.FakeData
end
