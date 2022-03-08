/**
 * Story T1
 */
var clientfileheader = {}

clientfileheader.h_HanderCount = 0
clientfileheader.h_InstanceKey = "storyT1Manager"

clientfileheader.h_3DrootPlayerInstance
clientfileheader.h_3DrootCarInstance

var StoryIsTrigger = false
var NodeInstance = {}




INIT_FRAME(clientfileheader.h_InstanceKey, function TimeLineFininshed() {
    ClientConstruct3EventActionHander("TimeLineFinished", () => {
        clientfileheader.h_HanderCount += 1
        console.log("timeLineFinished")
        Events_ReleasePlayertoCar()
    }, clientfileheader.h_HanderCount)

})

INIT_FRAME(clientfileheader.h_InstanceKey, function TimeLineRunning() {

    ClientConstruct3EventActionHander("TimelineRunning", () => {
        clientfileheader.h_HanderCount += 1
        Events_PlayeCarMoveAudio()
    }, clientfileheader.h_HanderCount)

})

INIT_FRAME(clientfileheader.h_InstanceKey, function RunningCarTimeline() {
    ad_PlayeTimeLine("story_01")

})

INIT_FRAME(clientfileheader.h_InstanceKey, function GrabPlayerToCar() {
    clientfileheader.h_3DrootPlayerInstance = INSTANCE_IS("Pl")
    clientfileheader.h_3DrootCarInstance = INSTANCE_IS("car_storyt2")
    if (clientfileheader.h_3DrootPlayerInstance == null) return
    if (clientfileheader.h_3DrootCarInstance == null) return;

    clientfileheader.h_3DrootPlayerInstance.x = clientfileheader.h_3DrootCarInstance.x - 800
    clientfileheader.h_3DrootPlayerInstance.y = clientfileheader.h_3DrootCarInstance.y + 600
    clientfileheader.h_3DrootPlayerInstance.zElevation = 20
    //SynchronousPosition(h_CarInstance, clientfileheader.h_3DrootPlayerInstance)
    AddChild(clientfileheader.h_3DrootCarInstance, clientfileheader.h_3DrootPlayerInstance)

})

function Events_ReleasePlayertoCar() {
    var ReleasePositionOffset = 700
    RemoveChild(clientfileheader.h_3DrootCarInstance, clientfileheader.h_3DrootPlayerInstance)
    clientfileheader.h_3DrootPlayerInstance.x = clientfileheader.h_3DrootCarInstance.x + ReleasePositionOffset
    clientfileheader.h_3DrootPlayerInstance.Y = clientfileheader.h_3DrootCarInstance.y + ReleasePositionOffset
    clientfileheader.h_3DrootPlayerInstance.zElevation = 1
}