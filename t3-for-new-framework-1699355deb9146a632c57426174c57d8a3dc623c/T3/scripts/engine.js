import("./use_script.js")
runOnStartup(async runtime => {
    runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
    /**@type {IRuntime} */
    globalThis.runtime = runtime
    globalThis.lib2 = runtime
});

async function OnBeforeProjectStart(runtime) {
    runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime) {
}

globalThis.lib = window
globalThis.JOT = window
globalThis.HOROOR_JOURNEY = window
globalThis.fUCK_MATH_library = window
globalThis.id = window
globalThis.e_Invoke = function (str, v1, v2, v3, v4, v5, v6) {
    return runtime.callFunction(str, v1, v2, v3, v4, v5, v6)
}
/**
 *
 * @param str
 * @param func_
 * @constructor
 * 监听事件
 */
globalThis.EvnetHander = function (str, func_) {
    window.addEventListener(str, () => {
        func_()
        window.removeEventListener(str, func_)
    })
}
/**
 *
 * @param str
 * @param func_
 * @param count
 * 监听事件
 */
globalThis.ClientConstruct3EventActionHander = (str, func_, count = 0) => {
    if (count >= 1) return
    window.addEventListener(str, function handerf(e) {
        func_(e)
    })
}
globalThis.ListenGlobalEventsHander = (str, func_, count = 0) => {
    if (count >= 1) return
    window.addEventListener(str, function handerf() {
        func_()
    })
}
/**
 * @param func
 * @constructor
 *  * 页面初始化
 */
globalThis.LIB_INIT_INTERFACE = function (func) {
    runOnStartup(async runtime => {
        func()
    })
}
/**
 *
 * @param instanceName
 * @param callback
 * @constructor
 * 监听到实例被创建
 */
globalThis.EVENT_INSTANCE_CREAT = function (instanceName, callback) {
    runtime.objects[instanceName].addEventListener("instancecreate", (e) => {
        callback(e)
    })
}
/**
 *
 * @param callback
 * @constructor
 * 监听tick
 */
globalThis.EVENT_TICK = function (callback) {
    runtime.addEventListener("tick", () => {
        callback()
    })
}
// globalThis.RegisterEvent = function (callback) {
//     return callback()
// }
globalThis.EVENT_GET_GROUPS = function (instanceName) {
    for (let group of runtime.objects[instanceName].instances()) {
        return group
    }
}
/**
 *
 * @param InstanceName
 * @param LayerName
 * @param x
 * @param y
 * @constructor
 * 创建实例
 */
globalThis.EVENT_CREAT_INSTANCE = function (InstanceName, LayerName, x, y) {
    var INSTANCE = runtime.objects[InstanceName].createInstance(LayerName, x, y, true)
    if (INSTANCE == null) return
    return INSTANCE
}
/**
 *
 * @param INSTANCE_NAME
 * @returns {*}
 * @constructor
 * 获取实例的小组
 */
globalThis.EVENT_GET_INSTANCE_CLASS = (INSTANCE_NAME) => {
    var CLASS = runtime.objects[INSTANCE_NAME].instances()
    return CLASS
}
/**
 *
 * @param INSTANCE_NAME
 * @returns {IInstance}
 * @constructor
 * 获取实例
 */
globalThis.INSTANCE_IS = (INSTANCE_NAME) => {
    var INSTANCE = runtime.objects[INSTANCE_NAME].getFirstInstance()
    return INSTANCE
}
/**
 *
 * @param ms
 * @returns {Promise<unknown>}
 * 异步等待
 */
globalThis.wt = (ms) => {
    return new Promise(res => setTimeout(res, ms));
}
globalThis.RestartLayout = () => {
}
globalThis.GoNextLayout = () => {
}
globalThis.SetLayoutAngel = () => {
}
globalThis.RecreatInitialInstance = () => {
}
globalThis.SetLayutScale = () => {
}
globalThis.Game_LoadSence = (DataName) => {
    e_Invoke("LoadSavaSence", DataName)
}
globalThis.Game_SaveSence = (DataName) => {
    e_Invoke("GameSavaSence", DataName)
}
globalThis.SetTimeScale = () => {
}
/**
 *
 * @param level
 * @constructor
 * 切换场景
 */
globalThis.CHANGE_LEVEL = (level) => {
    runtime.goToLayout(level)
}
/**
 *
 * @param name
 * @returns {ILayer}
 * @constructor
 * 获取图层
 */
globalThis.LAYER_IS = (name) => {
    var layer = runtime.layout.getLayer(name)
    return layer
}
/**
 *
 * @param name
 * @param state
 * @constructor
 * 切换图层的显示状态
 */
globalThis.LAYER_VISIBLE = (name, state) => {
    e_Invoke("c3setLayerVi", state, name)
}
/**
 *
 * @param eventname
 * @param p1
 * @param p2
 * @param p3
 * @param p4
 * @param p5
 * @constructor
 * 注册事件
 */
globalThis.RegisterCall = (eventname, p1, p2, p3, p4, p5) => {
    var event = new CustomEvent(eventname, {
        detail: {
            a: p1,
            b: p2,
            c: p3,
            d: p4,
            e: p5,
        }
    })
    window.dispatchEvent(event)
}
/**
 *
 * @constructor
 * debug
 */
globalThis.DO = function () {
    console.log("√")
}
globalThis.Log = (log) => {
    console.log(log)
}
globalThis.use = (use) => {
    import(use)
}
/**
 *
 * @param instance_name
 * @param func
 * 监听tick
 */
globalThis.tk = (instance_name, func) => {
    LIB_INIT_INTERFACE(() => {
        EVENT_INSTANCE_CREAT(instance_name, () => {
            EVENT_TICK(() => {
                if (INSTANCE_IS(instance_name) == null) return
                func()
            })
        })
    })
}
globalThis.ev_tick = (instance_name, func) => {
    LIB_INIT_INTERFACE(() => {
        EVENT_INSTANCE_CREAT(instance_name, () => {
            EVENT_TICK(() => {
                if (INSTANCE_IS(instance_name) == null) return
                func()
            })
        })
    })
}
globalThis.UPDATE_FRAME = (instance_name, func) => {
    LIB_INIT_INTERFACE(() => {
        EVENT_INSTANCE_CREAT(instance_name, () => {
            EVENT_TICK(() => {
                if (INSTANCE_IS(instance_name) == null) return
                func()
            })
        })
    })
}
/**
 *
 * @param instance_name
 * @param func
 * 监听对象初始化
 */
globalThis.in = (instance_name, func) => {
    LIB_INIT_INTERFACE(() => {
        EVENT_INSTANCE_CREAT(instance_name, () => {
            if (INSTANCE_IS(instance_name) == null) return
            func()
        })
    })
}
globalThis.ev_rea = (instance_name, func) => {
    LIB_INIT_INTERFACE(() => {
        EVENT_INSTANCE_CREAT(instance_name, () => {
            if (INSTANCE_IS(instance_name) == null) return
            func()
        })
    })
}
globalThis.INIT_FRAME = (instance_name, func) => {
    LIB_INIT_INTERFACE(() => {
        EVENT_INSTANCE_CREAT(instance_name, () => {
            if (INSTANCE_IS(instance_name) == null) return
            func()
        })
    })
}
/**
 *
 * @param name
 * 播放timeline
 */
globalThis.ad_PlayeTimeLine = (name) => {
    e_Invoke("TimeLinePlayByName", name)
}
/**
 *
 * @param p
 * @param c
 * @constructor
 * 添加子实例
 */
globalThis.AddChild = (p, c) => {
    if (p == null) return
    if (c == null) return;
    p.addChild(c, {
        "transformX": true,
        "transformY": true,
        "transformWidth": true,
        "transformHeight": true,
        "transformAngle": true,
        "transformZElevation": true,
        "destroyWithParent": true,
    })
}
/**
 *
 * @param p
 * @param c
 * @constructor
 * 移除子实例
 */
globalThis.RemoveChild = (p, c) => {
    if (p == null) return
    if (c == null) return;
    p.removeChild(c)
}
/**
 *
 * @param a
 * @param b
 * @constructor
 * 同步两个实例的位置
 */
globalThis.SynchronousPosition = (a, b) => {
    if (a == null) return
    if (b == null) return;
    b.x = a.x
    b.y = a.y
}
globalThis.Using = (str) => {
    import(str)
}
globalThis.LoadScriptsInOrder = {
    loadscript: function (str) {
        import(str)
    }
}
globalThis.MathGetDistance = (a1, a2, a3, a4) => {
    return e_Invoke("Math_Distance", a1, a2, a3, a4)
}
globalThis.MathGetRamdom = (a1, a2) => {
    return e_Invoke("Math_Ramdom", a1, a2)
}
globalThis.c3 = {
    keydownPress: function (keysrting) {
        if (runtime.keyboard.isKeyDown(keysrting)) {
            return true
        } else {
            return false
        }
    }


}