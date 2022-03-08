/**
 * word inducer
 */

var h_InstanceKey = "WordDucer"
var h_HanderCount = 0
var h_PLAYER
var isTriggering = false
var WorldDucerComponentProperties = {}


INIT_FRAME(h_InstanceKey, function INIt() {
    h_PLAYER = INSTANCE_IS("Pl")

})


UPDATE_FRAME(h_InstanceKey, async function PlayerTriggerWoldDucer() {

    if (h_PLAYER == null) return

    var DialogueTakesTimeToTalk = 1.5
    var TimeToWait = 1600


    /*  var DialogueDisplayText
      var NumberOfTriggers
      var is_TriggersOnce
      var is_MultilineDialogue
      var MultilineDialogJumpToEvents*/

    var WorldDucerArrays = EVENT_GET_INSTANCE_CLASS(h_InstanceKey)


    for (let WorldDucers of WorldDucerArrays) {
        if (h_PLAYER.testOverlap(WorldDucers)) {

            WorldDucerComponentProperties.DialogueDisplayText = WorldDucers.instVars.DisplayText
            WorldDucerComponentProperties.NumberOfTriggers = WorldDucers.instVars.NumberOfTriggers
            WorldDucerComponentProperties.is_TriggersOnce = WorldDucers.instVars.TriggersOnce
            WorldDucerComponentProperties.is_MultilineDialogue = WorldDucers.instVars.MultilineDialogue
            WorldDucerComponentProperties.MultilineDialogJumpToEvents = WorldDucers.instVars.MultilineDialogEvent

            if (WorldDucerComponentProperties.is_TriggersOnce) {
                if (WorldDucerComponentProperties.NumberOfTriggers > 0) {
                    return;
                }
            }

            if (isTriggering) return;
            isTriggering = true
            WorldDucers.instVars.NumberOfTriggers += 1

            if (WorldDucerComponentProperties.is_MultilineDialogue) {
                //eval(MultilineDialogEvent)
                //window[MultilineDialogEvent].call(this)
                console.error("No support for the moment, multi-line dialogue")
                return
            }
            await npc.TriggerConversation(WorldDucerComponentProperties.DialogueDisplayText, DialogueTakesTimeToTalk, TimeToWait)
            isTriggering = false
        }
    }
})

