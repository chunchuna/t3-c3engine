var clinetfileheader = {}

clinetfileheader.Scriptaccess = "DataManager"
clinetfileheader.HanderCount = 0

var ButtonKey = {}
ButtonKey.SaveKey = null
ButtonKey.LoadKey = null


INIT_FRAME(clinetfileheader.Scriptaccess, function SaveLoadSence() {
    ButtonKey.SaveKey = "*Key"
    ButtonKey.LoadKey = "/Key"
    
    var DataName = "MAIN_ROOM"
    ListenGlobalEventsHander(ButtonKey.SaveKey, () => {
        clinetfileheader.HanderCount += 1
        Game_SaveSence(DataName)
        OnscreenInstructions.TriggerScreenHint("save", 1500)


    }, clinetfileheader.HanderCount)
    ListenGlobalEventsHander(ButtonKey.LoadKey, () => {
        clinetfileheader.HanderCount += 1
        Game_LoadSence(DataName)
        OnscreenInstructions.TriggerScreenHint("load", 1500)


    }, clinetfileheader.HanderCount)


})

