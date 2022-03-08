/**
 * ScreenHit
 */


var InstanceKey = "ScreenHint"
var HanderCount = 0

var CanvasInstances = {}
CanvasInstances.h_CanvasHintTextInstahce = null

globalThis.OnscreenInstructions = window

OnscreenInstructions.TriggerScreenHint = (text, time) => {
    TriggerScreenHint(text, time)
}

INIT_FRAME(InstanceKey, function init(e) {
    CanvasInstances.h_CanvasHintTextInstahce = INSTANCE_IS("ScreenHint")
    CanvasInstances.h_CanvasHintTextInstahce.opacity = 0
})


function TriggerScreenHint(text, time) {
    if (CanvasInstances.h_CanvasHintTextInstahce == null) return
    CanvasInstances.h_CanvasHintTextInstahce.opacity = 1
    CanvasInstances.h_CanvasHintTextInstahce.text = text
    setTimeout(() => {
        CanvasInstances.h_CanvasHintTextInstahce.opacity = 0
        CanvasInstances.h_CanvasHintTextInstahce.text = ""
    }, time)

}
