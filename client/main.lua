local function SetVisible(show)
    SendNUIMessage({
        action = 'setVisible',
        data = show
    })
    SetNuiFocus(show, show)
end

local show = false

RegisterCommand('show', function(_, _, _)
    show = not show
    SetVisible(show)
end, false)
