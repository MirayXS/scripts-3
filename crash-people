coroutine.wrap(function()
while wait() do
    for i,v in pairs(game.Players:GetPlayers()) do
        pcall(function()
            v.Character.LowerTorso:FindFirstChild("BOOMBOXSOUND").SoundId=""
        end)
    end
end 
end)()
coroutine.wrap(function()
    while wait(.3) do
        coroutine.wrap(function()
            pcall(function()
                if game.Players.LocalPlayer.Character.LowerTorso:FindFirstChild("BOOMBOXSOUND") then
                    game.Players.LocalPlayer.Character.LowerTorso:FindFirstChild("BOOMBOXSOUND"):Destroy()
                end
                game:GetService("ReplicatedStorage").MainEvent:FireServer("Boombox","6947054675")
                repeat wait() until game.Players.LocalPlayer.Character.LowerTorso:FindFirstChild("BOOMBOXSOUND")
                game.Players.LocalPlayer.Character.LowerTorso:FindFirstChild("BOOMBOXSOUND").SoundId=""
            end)
        end)()
    end
end)()
