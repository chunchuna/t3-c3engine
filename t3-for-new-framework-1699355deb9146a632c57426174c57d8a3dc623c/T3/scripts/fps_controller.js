var ClientFileHead = {}
var ClientFileVar = {}
var ClientNodeInstance = {}
var ClientAddon = {}
var ClientKeyPressString = {}
var ClientConstcuct3EventAction = {}


ClientFileHead.instancekey = "Pl";
ClientFileHead.handercount = 0;

var clientvarproperties = {}
clientvarproperties.Firstpersoncontroller = {}

clientvarproperties.Firstpersoncontroller.PerspectiveState = "fpp" // 视角状态
clientvarproperties.Firstpersoncontroller.enble = true;
clientvarproperties.Firstpersoncontroller.flymode = true;

/**@type {ISpriteInstance}*/

ClientNodeInstance.playerInstance = null

INIT_FRAME(ClientFileHead.instancekey, () => {
    ClientNodeInstance.playerInstance = INSTANCE_IS(ClientFileHead.instancekey)

})


// init camera
INIT_FRAME(ClientFileHead.instancekey, function INIT_CAMERA() {
    ClientAddon.addon3dcamera = runtime.objects.fpscam
    ClientAddon.addon3dcamera.lookParallelToLayout(0, 0, 0, 0)

})

/**@type {I3DCameraObjectType} */
ClientAddon.addon3dcamera = null

// lock mouse in screen
INIT_FRAME(ClientFileHead.instancekey, function Lockandreleasemouse() {


    ClientKeyPressString.lockmousekey = "_z_press"

    ClientConstruct3EventActionHander(ClientKeyPressString.lockmousekey, () => {
        ClientFileHead.handercount += 1;
        var enble = clientvarproperties.Firstpersoncontroller.enble

        if (!enble) {
            setTimeout(() => {
                clientvarproperties.Firstpersoncontroller.enble = true
                e_Invoke("mouse:request:pointer:lock");

            }, 10)
        }

        if (enble) {
            clientvarproperties.Firstpersoncontroller.enble = false;
            e_Invoke("mouse:realase:pointer:lock");

        }

    }, ClientFileHead.handercount)

})

// mouse controller lens
INIT_FRAME(ClientFileHead.instancekey, function Mousecontrollens() {

    ClientConstcuct3EventAction.MouseMOnMoveMent = "_mouse:onmovement";
    var Shiftdisplacement = 15
    ClientConstruct3EventActionHander(ClientConstcuct3EventAction.MouseMOnMoveMent, () => {
        if (!clientvarproperties.Firstpersoncontroller.enble) return

        var Mousemovement_x = e_Invoke("get_mouse_move_x") / Shiftdisplacement
        var Mousemovement_y = e_Invoke("get_mouse_move_y") / Shiftdisplacement
        e_Invoke("cam:rotate:bymousem", Mousemovement_x, Mousemovement_y, 20, 180)


    })

})


INIT_FRAME(ClientFileHead.instancekey, function LensBackground() {
    var groundStandZ = 5
    ClientKeyPressString.lensbackground_key = "_q_press"
    ClientConstruct3EventActionHander(ClientKeyPressString.lensbackground_key, () => {
        if (ClientNodeInstance.playerInstance.zElevation > 0) {
            ClientNodeInstance.playerInstance.zElevation = groundStandZ

        }
    })
})

UPDATE_FRAME(ClientFileHead.instancekey, function setCameraPosition() {
    var PositionOffset = 25
    e_Invoke("cam:set:postion", ClientNodeInstance.playerInstance.x, ClientNodeInstance.playerInstance.y, ClientNodeInstance.playerInstance.zElevation + PositionOffset)


})

var self_Privatevar = {}
self_Privatevar.CameraXRotation = null
self_Privatevar.MoveSpeed = 0;

UPDATE_FRAME(ClientFileHead.instancekey, function Cameramovementandcollision() {
    self_Privatevar.CameraXRotation = e_Invoke("cam_get_x_rotation");
    self_Privatevar.MoveSpeed = 2300 * runtime.dt

    ClientKeyPressString.UP_KEY = "KeyW"
    ClientKeyPressString.DOWN_KEY = "KeyS"
    ClientKeyPressString.LEFT_KEY = "KeyA"
    ClientKeyPressString.RIGHT_KEY = "KeyD"

    if (c3.keydownPress(ClientKeyPressString.UP_KEY)) {
        e_Invoke("pl:move:at:angel", self_Privatevar.CameraXRotation, self_Privatevar.MoveSpeed)
    }
    if (c3.keydownPress(ClientKeyPressString.DOWN_KEY)) {
        e_Invoke("pl:move:at:angel", self_Privatevar.CameraXRotation, -self_Privatevar.MoveSpeed)
    }
    if (c3.keydownPress(ClientKeyPressString.LEFT_KEY)) {
        e_Invoke("pl:move:at:angel", self_Privatevar.CameraXRotation - 90, self_Privatevar.MoveSpeed)
    }
    if (c3.keydownPress(ClientKeyPressString.RIGHT_KEY)) {
        e_Invoke("pl:move:at:angel", self_Privatevar.CameraXRotation + 90, self_Privatevar.MoveSpeed)
    }

})


UPDATE_FRAME(ClientFileHead.instancekey, function CameraFly() {
    if (c3.keydownPress("Space")) {
        if (!clientvarproperties.Firstpersoncontroller.flymode) return
        ClientNodeInstance.playerInstance.zElevation += 3
    }
    if (c3.keydownPress("ShiftLeft")) {
        if (ClientNodeInstance.playerInstance.zElevation > -1) {
            ClientNodeInstance.playerInstance.zElevation -= 3
        }
    }


})