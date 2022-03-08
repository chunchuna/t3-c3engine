LIB_INIT_INTERFACE(() => {
    EVENT_INSTANCE_CREAT("f_Ghost", () => {
        //Set the moving interval parameter of ghost
        HOROOR_JOURNEY.GHOST_SET_MOVETIMER()
        //Execute when the ghost movement timer parameter is triggered
        HOROOR_JOURNEY.GHOST_TIMER_MOVE_TIMER_DONE()
        EVENT_TICK(() => {
            //Turn on the ghost's movement timer
            //**
            //Why write it in tick
            //Because the type of timer is once trigger
            //That is, it will be closed after each trigger, not cyclic trigger
            //So it has to be written in the tick
            //Why not make loop trigger
            //Because once trigger is easy to manage
            // **
            HOROOR_JOURNEY.GHOST_OPEN_MOVE_TIMER()
        })
    })
})


HOROOR_JOURNEY.HOROOR_JOURNEY.GHOST_MOVE_RANDOM_PATHFIND = async function (e) {
    //This function handles when the specified ghost receives the timer instruction
    //Start moving randomly within a certain range based on the position of the ghost 
    // itself and bypass the obstacle
    //The front only calculates the position that needs to be moved
    //It's actually random movement
    if (e == null) return
    var INSTANCE = e
    /**@type {IPathfindingBehaviorInstance}*/
    var PATH_BE = INSTANCE.behaviors.PathBe
    var OffsetRange = 300
    var OFFSET_X =MathGetRamdom(-OffsetRange, OffsetRange)
    var OFFSET_Y =MathGetRamdom(-OffsetRange, OffsetRange)
    var FIND_X = OFFSET_X + INSTANCE.x
    var FIND_Y = OFFSET_Y + INSTANCE.y
//After calculating the position to be moved, the pathfinding movement is performed by this method
//This method will automatically bypass obstacles
    HOROOR_JOURNEY.GHOST_PATH_GO_PATH(PATH_BE, FIND_X, FIND_Y)
}

HOROOR_JOURNEY.GHOST_PATH_GO_PATH = async (PathBe, findX, findY) => {
    //To perform the routing movement, you need to pass in the parameters of the routing plug-in,
    // and then pass the location (x, y) where the routing is required
    //This function is asynchronous
    //If you need to customize the obstacles you need to bypass, the current method is to customize 
    // the obstacles in the ghost event table
    //Later, there will be a special obstacle group. Just add obstacles to the group directly

    await PathBe.findPath(findX, findY)
    //var PATH_POINT = EVENT_CREAT_INSTANCE("PathFindPoint", "Point", findX, findY)
    PathBe.startMoving()
}


HOROOR_JOURNEY.GHOST_SET_MOVETIMER = function () {
    //What we're dealing with here is that all ghosts have their own movement intervals
    //The processing method here is to move the ghost_ The timer parameter is randomly assigned to each ghost
    //In order to achieve the behavior of random movement interval
    //Ghost move_ The timer parameter will directly affect the time parameter of its movement timer

    var INSTANCE_CLASS = runtime.objects.f_Ghost.instances()
    for (let CLASS of INSTANCE_CLASS) {
        CLASS.instVars.MOVE_TIMER =MathGetRamdom(1, 3)
        //console.log(CLASS.instVars.MOVE_TIMER)
    }
}
HOROOR_JOURNEY.GHOST_OPEN_MOVE_TIMER = function () {
    //What's handled here is to turn on the movement timer switch of all ghosts
    //If this switch is not turned on, there will be no trigger of the mobile timer
    //Of course, nothing will be done
    //All ghost movements are triggered by a movement timer
    //If you don't want the ghost to move, you can skip this method
    //* * this method is called to open the event table
    //He will turn on all ghost movement timers by default
    //I didn't open the timer specified in the V1 parameter
    //And the time parameter of the timer is move in the ghost instvars_ 
    // The timer parameter is the default movement interval
    //This MOVE_TIMER can be horoor again_ JOURNEY. GHOST_SET_MOVETIMER is set in this method
    //Here, a parameter will be added later to define the interval of the timer or the type of processing timer
    //This is because the ghost has only one mobile timer and is not too lazy to write

    e_Invoke("GHOST_OPEN_TIMER", "MOVE_TIMER")

}
HOROOR_JOURNEY.GHOST_TIMER_MOVE_TIMER_DONE = function () {
//The processing here is to execute the following function when the ghost's movement timer 
// switch reaches the specified time
//This listener is written in the event table and is triggered when the timer ends
    HOROOR_JOURNEY.addEventListener("MOVE_TIMER_DONE", (e) => {
        //An instance of the specified ghost passed in through the listener
        var instance = e.detail[0]
        //The pathfinding function directly called here
        //The parameter needs to be passed and the pathfinding
        // behavior needs to be specified, that is, the instance of instance    
        HOROOR_JOURNEY.GHOST_MOVE_RANDOM_PATHFIND(instance)
        //HOROOR_JOURNEY.GHOST_MOVE_RANDOM()
    })
}
