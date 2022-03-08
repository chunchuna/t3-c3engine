var ClientFileHead = {}
var ClientFileVar = {}
var ClientFileCustoMeventFlowSystem = {}

ClientFileHead.InstanceKey = "LobbyRoomNode"
ClientFileHead.HanderCount = 0

ClientFileVar.var_record = {}
ClientFileVar.var_record.playerclientName = ""
globalThis.lobby = {}

var ClientNodeInstance = {}
var ClienteditLayer = {}


/***
 *
 * login window
 **/


ClientNodeInstance.CanvasNameEditBoxNode = null
ClientNodeInstance.CanvasLoginStateText_node = null
ClienteditLayer.CanvasLoginLayer = null

INIT_FRAME(ClientFileHead.InstanceKey, () => {
    ClientNodeInstance.CanvasNameEditBoxNode = INSTANCE_IS("NameEditBox")
    ClientNodeInstance.CanvasLoginStateText_node = INSTANCE_IS("Loginstatetext")
    ClienteditLayer.CanvasLoginLayer = LAYER_IS("CanvasLogin")
})

INIT_FRAME(ClientFileHead.InstanceKey, () => {
    ClientNodeInstance.CanvasLoginStateText_node.isVisible = false
})
INIT_FRAME(ClientFileHead.InstanceKey, async function init() {
    ClientConstruct3EventActionHander("EnterButtonClick", async (e) => {
        ClientFileHead.HanderCount += 1
        /**n
         * 验证Id
         */
        var button = e.detail.a[0]
        var buttonid = button.instVars.id
        if (buttonid == 99) {
            ClientFileCustoMeventFlowSystem.Logintothegame_func()
        }
    }, ClientFileHead.HanderCount)
})


ClientFileCustoMeventFlowSystem.Logintothegame_func = async function () {
    var getplayerclientname = ClientNodeInstance.CanvasNameEditBoxNode.text
    if (getplayerclientname == "") {
        console.log("name can not be null")

        ClientNodeInstance.CanvasLoginStateText_node.isVisible = true
        await wt(2000)
        ClientNodeInstance.CanvasLoginStateText_node.text = "name can not be null"
        ClientNodeInstance.CanvasLoginStateText_node.isVisible = false


        return
    }
    ClientFileVar.var_record.playerclientName = getplayerclientname
    lobby.playerclientName = getplayerclientname

    ClientNodeInstance.CanvasLoginStateText_node.isVisible = true
    ClientFileCustoMeventFlowSystem.SetStateInfor("wait..")
    await wt(1500)
    ClientFileCustoMeventFlowSystem.SetStateInfor("logining..")
    await wt(500)
    ClientFileCustoMeventFlowSystem.SetStateInfor("logining...")
    await wt(500)
    ClientFileCustoMeventFlowSystem.SetStateInfor("logining....")
    ClientNodeInstance.CanvasLoginStateText_node.isVisible = false

    ClienteditLayer.CanvasJoinLayer.isVisible = true
    ClienteditLayer.CanvasLoginLayer.isVisible = false
}  // login game


/***
 *end login window
 *
 *
 /***

 /*
 join window

 */

ClientFileVar.servers_node = {}
ClientFileVar.servers_node.OnlineServers = [] // 在线的服务器
ClientNodeInstance.canvas_ServersListText_instance = null

ClienteditLayer.CanvasJoinLayer = null
INIT_FRAME(ClientFileHead.InstanceKey, () => {
    ClienteditLayer.CanvasJoinLayer = LAYER_IS("CanvasJoin")
    ClienteditLayer.CanvasJoinLayer.isVisible = false
    ClientNodeInstance.canvas_ServersListText_instance = INSTANCE_IS("ServersListText")

})


INIT_FRAME(ClientFileHead.InstanceKey, () => {
    ClientFileVar.servers_node.OnlineServers.push("china")
    ClientFileVar.servers_node.OnlineServers.push("china:chengdu")
})

UPDATE_FRAME(ClientFileHead.InstanceKey, function updateserverslist() {
    if (ClientNodeInstance.canvas_ServersListText_instance == null) return
    var serversLength = ClientFileVar.servers_node.OnlineServers.length
    for (let i = 0; i < serversLength; i++) {
        ClientNodeInstance.canvas_ServersListText_instance.text = "online servers：\n" +
            ClientFileVar.servers_node.OnlineServers[i]
    }

})


INIT_FRAME(ClientFileHead.InstanceKey, async function fINDGameButtonCLick() {
    ClientConstruct3EventActionHander("EnterButtonClick", async (e) => {
        var button = e.detail.a[0]
        var buttonid = button.instVars.id
        if (buttonid == 1) {
            ClientFileCustoMeventFlowSystem.findgameEventStream()
            console.log("find game")
        }
        if (buttonid == 2) {
            //todo:setting button
        }
    })
})

ClientFileCustoMeventFlowSystem.findgameEventStream = async function () {

    ClientNodeInstance.CanvasLoginStateText_node.isVisible = true
    ClientNodeInstance.CanvasLoginStateText_node.text = "find game"
    ClientFileCustoMeventFlowSystem.SetStateInfor("find game")
    await wt(1200)
    ClientFileCustoMeventFlowSystem.SetStateInfor("find a game in chian server")
    await wt(500)
    ClientFileCustoMeventFlowSystem.SetStateInfor("join..")
    await wt(500)
    ClientFileCustoMeventFlowSystem.SetStateInfor("join...")
    await wt(500)
    ClientFileCustoMeventFlowSystem.SetStateInfor("join....")
    await wt(500)
    ClientFileCustoMeventFlowSystem.SetStateInfor("join....")
    await wt(1200)
    ClientNodeInstance.CanvasLoginStateText_node.isVisible = false
    ClienteditLayer.CanvasJoinLayer.isVisible = false
    await wt(1000)
    CHANGE_LEVEL("MAIN_ROOM")
} // find game 
1
/*

end join window

 */

ClientFileCustoMeventFlowSystem.SetStateInfor = function (str) {
    if (ClientNodeInstance.CanvasLoginStateText_node == null) return
    ClientNodeInstance.CanvasLoginStateText_node.text = str

}