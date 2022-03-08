LIB_INIT_INTERFACE(() => {
    EVENT_INSTANCE_CREAT("Pl", () => {
        EVENT_TICK(() => {

        })
    })
})
HOROOR_JOURNEY.FPS_CAM_INIT = () => {
    var _pl = INSTANCE_IS("Pl")
    _pl.isVisible = false

    if (HOROOR_JOURNEY.DEBUG_CAMERA) return
    /**
     *
     * @type {I3DCameraObjectType
     * @private
     */
    var _fpscam = runtime.objects.fpscam
    _fpscam.lookParallelToLayout(0, 0, 0, 0)
}
