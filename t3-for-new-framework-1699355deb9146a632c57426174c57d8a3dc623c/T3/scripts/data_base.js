var ScriptAccessInstance = "DataManager"
var HanderCount = 0


INIT_FRAME(ScriptAccessInstance, function SaveSence() {
    var ButtonPressed = "*Key"
    ClientConstruct3EventActionHander(ButtonPressed, () => {
        HanderCount += 1
        console.log("Pressed * Button")

    }, HanderCount)
})
