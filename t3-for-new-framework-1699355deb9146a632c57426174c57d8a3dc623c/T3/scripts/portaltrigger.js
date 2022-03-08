var clientfilehead = {}
var nodeinstance = {}
var clientfilevar = {}

clientfilehead.instancekey = "PortalTrigger"
clientfilehead.handercout = 0


clientfilevar.istrgger = false
nodeinstance.player = null


INIT_FRAME(clientfilehead.instancekey, function INIT() {
    nodeinstance.player = INSTANCE_IS("Pl")

})


/**
 *
 *当前选择的传送门
 */
clientfilevar.CurrentlyselectedPortalTrigger = null
clientfilevar.Xteleportation = 0
clientfilevar.Yteleportation = 0
clientfilevar.Standardtips = "Press \"J\" to enter"

UPDATE_FRAME(clientfilehead.instancekey, function Interactingtheportal() {

    var nodeComponentPropertiesTextPrompt
    var nodeComponentPropertiesTx
    var nodeComponentPropertiesTy
    var nodeComponentPropertiesisEnble

    var PortalClassArray = EVENT_GET_INSTANCE_CLASS(clientfilehead.instancekey)
    if (PortalClassArray == null) return
    for (let PortalNodes of PortalClassArray) {
        if (clientfilevar.istrgger) return;

        if (nodeinstance.player.testOverlap(PortalNodes)) {

            nodeComponentPropertiesTextPrompt = PortalNodes.instVars.TextPrompt
            nodeComponentPropertiesTx = PortalNodes.instVars.TeleportX
            nodeComponentPropertiesTy = PortalNodes.instVars.TeleportY

            nodeComponentPropertiesisEnble = PortalNodes.instVars.isEnble
            if (!nodeComponentPropertiesisEnble) return;

            clientfilevar.istrgger = true
            OnscreenInstructions.TriggerScreenHint(nodeComponentPropertiesTextPrompt + clientfilevar.Standardtips, 1200)
            clientfilevar.CurrentlyselectedPortalTrigger = PortalNodes

            clientfilevar.Xteleportation = nodeComponentPropertiesTx
            clientfilevar.Yteleportation = nodeComponentPropertiesTy

            setTimeout(() => {
                clientfilevar.istrgger = false
                clientfilevar.CurrentlyselectedPortalTrigger = null
            }, 2000)

        }
    }
})


clientfilehead.enterkey = "KeyJ"

INIT_FRAME(clientfilehead.instancekey, function Enterkeystrokedetection() {
    ClientConstruct3EventActionHander(clientfilehead.enterkey, () => {
        if (clientfilevar.CurrentlyselectedPortalTrigger == null) return
        var node = clientfilevar.CurrentlyselectedPortalTrigger

        clientfilehead.handercout += 1

        nodeinstance.player.x = clientfilevar.Xteleportation
        nodeinstance.player.y = clientfilevar.Yteleportation
        

    }, clientfilehead.handercout)
})

