getgenv().UserKey = 'yourkeygoeshere'; -- dont touch this
setreadonly(syn,false)
synr=syn.request
mr = hookfunction(math.random,function(...)
    if checkcaller() then
        return 1
    end
    return mr(...)
end)
syn.request = function(data)
    print(data.url)
    if data.Url:find("loadScript") then
        return {Body="9e73eacc85ea18c0042365ad5e9148430643dedebc34d3e34c3dfd75fd2a6abc33b7b591c64a3f8c2fa096aa7200c617956cb7a4bc57f15672d50f16d305bc61"}
    end
    if data.Url:find("xd") then
        return {Body="c59028bda721a768b0f6d9a4cb65fe9cab89e88d03d74af2b3c57b2eb646d2efcb4a073afc2d685f61389df1cd3143e4f9ae7124454a7613e3320d108dec1a16"}
    end
    return synr(data)
end
t=true
mb = hookfunction(messagebox,function(...)
    if t then
        t=false
        return
    end
    return mb(...)
end)
setreadonly(syn, true)
loadstring(game:HttpGet('https://raw.githubusercontent.com/machport/mathrandomhooktlol/main/trolled.lua'))()
