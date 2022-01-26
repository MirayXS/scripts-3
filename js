local js_image = 81306401 -- image id here
local js_sound = "rbxassetid://6773509285" -- id here


function jumpscare()
   local function fiximage(id)
       return string.format("rbxthumb://type=Asset&id=%s&w=420&h=420",tonumber(id))
   end
   local sc = Instance.new("ScreenGui",game.CoreGui)
   sc.DisplayOrder = 10000
   sc.IgnoreGuiInset = true
   local img = Instance.new("ImageLabel",sc)
   img.Size = UDim2.new(1,0,1,0)
   img.Image = fiximage(js_image)
   img.ScaleType = "Fit"
   img.BackgroundColor3 = Color3.fromRGB(0,0,0)
   local auegh = Instance.new("Sound",game)
   auegh.Volume = 15
   auegh.SoundId = js_sound
   wait(0.6)
   auegh:Play()
   auegh.Ended:Connect(function()
       wait()
       auegh:Destroy()
   end)
   game:GetService("TweenService"):Create(img,TweenInfo.new(8),{BackgroundTransparency = 1,ImageTransparency = 1}):Play()
   delay(15,function()
       sc:Destroy()
   end)
end


jumpscare()
