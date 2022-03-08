

var Clientfileheader = {}


var gInstanceKey = "GraphText"
var gHanderCount = 0

var DefaultTextColor = "[background=#A9A9A9]"
var g_PLAYER

globalThis.RenderCharacter = window

RenderCharacter.RenderDebugText = (text) => {
    RenderDebugText(text)
}

/**
 * @type {{}}
 * 默认要渲染的字符属性
 */

var DefaultRenderCharacter = {}


UPDATE_FRAME(gInstanceKey, function DisplayDefaultInformation() {

    var CanvasRenderText = INSTANCE_IS("GraphText")
    var DefaultBackgroundColor = DefaultTextColor
    var PLAYERINSTANCE = INSTANCE_IS("Pl")

    if (PLAYERINSTANCE == null) return


    DefaultRenderCharacter.FPSCamera = runtime.objects.fpscam
    DefaultRenderCharacter.Verision = "0.0.2"

    DefaultRenderCharacter.FrameRate = e_Invoke("c3fps")
    DefaultRenderCharacter.cpu = e_Invoke("c3cpu")

    DefaultRenderCharacter.PlayerPositionX = PLAYERINSTANCE.x
    DefaultRenderCharacter.PlayerPositionY = PLAYERINSTANCE.y
    DefaultRenderCharacter.PlayerZ = PLAYERINSTANCE.zElevation

    DefaultRenderCharacter.FPSCameraPosition = DefaultRenderCharacter.FPSCamera.getCameraPosition()

    DefaultRenderCharacter.isFlightMode = null
    DefaultRenderCharacter.isGodMod = String(HOROOR_JOURNEY.DEBUG_CAMERA)
    DefaultRenderCharacter.StateFog = null


    CanvasRenderText.text = `${DefaultBackgroundColor} 
       
        DefaultRenderCharacter.Verision:${DefaultRenderCharacter.Verision}
        FrameRate(FPS):${DefaultRenderCharacter.FrameRate} 
        CPU:${DefaultRenderCharacter.cpu}
        PlayerPosition:(${DefaultRenderCharacter.PlayerPositionY}:${DefaultRenderCharacter.PlayerPositionX}) 
        FPSCameraPosition:${DefaultRenderCharacter.FPSCameraPosition} 
        isFlightMode:${DefaultRenderCharacter.isFlightMode}  
        isGodMod:${DefaultRenderCharacter.isGodMod}
        StateFog:${DefaultRenderCharacter.StateFog} 
        PlayerZ:${DefaultRenderCharacter.PlayerZ} 
        `

})


function RenderDebugText(text) {

    var CanvasRenderText = runtime.objects.GraphText?.getFirstInstance()
    var DefaultBackgroundColor = DefaultTextColor
    var RenderingInformationAlready = CanvasRenderText.text
    CanvasRenderText.text = `${RenderingInformationAlready} \n ${text}`

}
