LIB_INIT_INTERFACE(() => {
    EVENT_INSTANCE_CREAT("f_Ghost", (e) => {
        EVENT_TICK(() => {
            HOROOR_JOURNEY.GHOST_CLOSE_PL_ACTION()
        })
        HOROOR_JOURNEY.GHOST_SET_TYPE(e)
    })
})

/**
 *
 * @param e
 * @constructor
 * 随机幽灵的移动类型
 */
HOROOR_JOURNEY.GHOST_SET_TYPE = (e) => {
    var INSTANCE = e.instance
    var CHA_TYPE = ["BRAVE", "DANXIAO"]
    var RANDOM_ = MathGetRamdom(0, 1)
    var THIS_CHA_TYPE = CHA_TYPE[RANDOM_]
    INSTANCE.instVars.CHA_TYPE = THIS_CHA_TYPE
}

HOROOR_JOURNEY.GHOST_CLOSE_PL_ACTION = () => {
    var INSTANCES_CLASS = EVENT_GET_INSTANCE_CLASS("f_Ghost")
    var TAG_DISTANCE = 300
    for (let instance of INSTANCES_CLASS) {
        var DISTANCE = instance.instVars.Distance
        if (DISTANCE <= TAG_DISTANCE) {
            HOROOR_JOURNEY.GHOST_DO_ACTION_BY_CHATYPE(instance)
        }
    }
}

HOROOR_JOURNEY.GHOST_DO_ACTION_BY_CHATYPE = (e) => {
    var instance = e
    if (e == null) return
    var CHA_TYPE = instance.instVars.CHA_TYPE
    switch (CHA_TYPE) {
        case "BRAVE":
            HOROOR_JOURNEY.GHOST_BRAVE_DO_ACTION()
            break;
        case "TIMID":
            HOROOR_JOURNEY.GHOST_TIMID_DO_ACTION()
            break;
    }
}

HOROOR_JOURNEY.GHOST_ACTION_RUNAWAY = (e) => {
    if (e == null) return
    e.x = e + 1500
    e.y = e + 1500
}

HOROOR_JOURNEY.GHOST_SET_INVISIBLE = (e) => {
    e.opacity = 0
}

HOROOR_JOURNEY.GHOST_BRAVE_DO_ACTION = () => {

}

HOROOR_JOURNEY.GHOST_TIMID_DO_ACTION = () => {

}

