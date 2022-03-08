var hander_count = 0
runOnStartup(async runtime => {
    lib.fpsController.p = "fpp"
    lib.fpsController.enble = false
    lib.fpsController.fly = true
    runtime.objects.Pl.addEventListener("instancecreate", (e) => {
        if (INSTANCE_IS("Pl") == null) return
        lib.fpsController["fpscam:init:set"]()
        runtime.addEventListener("tick", () => {
            if (INSTANCE_IS("Pl") == null) return
            lib.fpsController["fpscam:tick:set"]()
            lib.fpsController["pl_movement_collsion"]()
        })
    })
})
lib.fpsController = {
    "fpscam:init:set": () => {
        /**
         * @type {I3DShapeInstance}
         * @private
         */
        var _pl = INSTANCE_IS("Pl")
        if (_pl == null) return;

        _pl.isVisible = false
        /**
         * @type {I3DCameraObjectType}
         */
        if (HOROOR_JOURNEY.DEBUG_CAMERA) return
        var _fpscam = runtime.objects.fpscam
        _fpscam.lookParallelToLayout(0, 0, 0, 0)

        ClientConstruct3EventActionHander("_z_press", () => {
            hander_count += 1
            if (!lib.fpsController.enble) {
                setTimeout(function () {
                    lib.fpsController.enble = true
                    e_Invoke("mouse:request:pointer:lock")
                }, 10)
            }
            if (lib.fpsController.enble) {
                lib.fpsController.enble = false
                e_Invoke("mouse:realase:pointer:lock")

            }
        }, hander_count)
        // lib.addEventListener("_z_press", () => {
        //     //EventCall("mousepl:move:at:angel:request:pointer:lock")
        //     if (!lib.fpsController.enble) {
        //         setTimeout(function () {
        //             lib.fpsController.enble = true
        //             EventCall("mouse:request:pointer:lock")
        //         }, 10)
        //     }
        //     if (lib.fpsController.enble) {
        //         lib.fpsController.enble = false
        //         EventCall("mouse:realase:pointer:lock")
        //
        //     }
        // })
        lib.addEventListener("_mouse:onmovement", () => {
            //EventCall("cam:rotate:bymousem")
            if (HOROOR_JOURNEY.DEBUG_CAMERA) return
            if (!lib.fpsController.enble) return;
            var mouse_move_ment_x = e_Invoke("get_mouse_move_x") / 15
            var mouse_move_ment_y = e_Invoke("get_mouse_move_y") / 15
            e_Invoke("cam:rotate:bymousem", mouse_move_ment_x, mouse_move_ment_y, 20, 180)
        })
        lib.addEventListener("_q_press", () => {
            if (lib.fpsController.fly && _pl.zElevation > 0) {
                _pl.zElevation = 5
            }
        })
    },
    "fpscam:tick:set": () => {
        if (HOROOR_JOURNEY.DEBUG_CAMERA) return
        var _pl = runtime.objects.Pl?.getFirstInstance()
        if (_pl == null) return;
        var _fpscam = runtime.objects.fpscam
        //_pl.angle = EventCall("cam_get_x_rotation")
        e_Invoke("cam:set:postion", _pl.x, _pl.y, _pl.zElevation + 25)
    },
    "pl_movement_collsion": () => {
        var x_rotation = e_Invoke("cam_get_x_rotation")
        // Walk
        var spd = 2300 * runtime.dt
        var _pl = runtime.objects.Pl?.getFirstInstance()
        if (_pl == null) return;
        if (runtime.keyboard.isKeyDown("KeyW")) {
            e_Invoke("pl:move:at:angel", x_rotation, spd)
            //EventCall("pl:out:of:soild", x_rotation + 180)
        }
        if (runtime.keyboard.isKeyDown("KeyS")) {
            e_Invoke("pl:move:at:angel", x_rotation, -spd)
            //EventCall("pl:out:of:soild", x_rotation)
        }
        if (runtime.keyboard.isKeyDown("KeyA")) {
            e_Invoke("pl:move:at:angel", x_rotation - 90, spd)
            //EventCall("pl:out:of:soild", x_rotation + 90)
        }
        if (runtime.keyboard.isKeyDown("KeyD")) {
            e_Invoke("pl:move:at:angel", x_rotation + 90, spd)
            //EventCall("pl:out:of:soild", x_rotation - 90)
        }
        //Fly
        if (!lib.fpsController.fly) return
        if (runtime.keyboard.isKeyDown("Space")) {
            _pl.zElevation += 3
        }
        if (runtime.keyboard.isKeyDown("ShiftLeft")) {
            _pl.zElevation -= 3
        }
    }
}
