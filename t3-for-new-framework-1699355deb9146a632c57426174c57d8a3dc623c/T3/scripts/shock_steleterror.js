/**
 *Shock Action
 */

var InstanceKey = "SteleTerrorManager"
var HanderCount = 0

var h_triggerOnTheGround
var h_PLAYER
var h_SteleTerrorManager


INIT_FRAME(InstanceKey,
    function initiatingSteleTerror() {
        h_triggerOnTheGround = INSTANCE_IS("TerrorTrigger")
        h_PLAYER = INSTANCE_IS("Pl")
        h_SteleTerrorManager = INSTANCE_IS("SteleTerrorManager")
        h_SteleTerrorManager.zElevation = 9000
        h_triggerOnTheGround.isVisible = false
        h_SteleTerrorManager.isVisible = false

    })

UPDATE_FRAME(InstanceKey,
    function playerTriggered() {
        if (h_triggerOnTheGround == null) return;
        if (h_PLAYER == null) return;
        if (h_SteleTerrorManager == null) return;

        if (h_PLAYER.testOverlap(h_triggerOnTheGround)) {
            var TriggerTimes = h_triggerOnTheGround.instVars.times
            if (TriggerTimes <= 0) {
                h_triggerOnTheGround.instVars.times += 1
                shockPlayer()
            }
        }
    })


function shockPlayer() {
    h_SteleTerrorManager.zElevation = 0
}