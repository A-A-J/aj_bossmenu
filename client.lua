RegisterCommand('bossmenu', function()
    SetNuiFocus(true, true)

    SendNUIMessage({
        action = 'open',
        data = AJ.GetFakeBossMenuData()
    })
end)

RegisterNUICallback('close', function(_, cb)
    SetNuiFocus(false, false)

    SendNUIMessage({
        action = 'close'
    })

    cb('ok')
end)
