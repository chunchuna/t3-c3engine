runOnStartup(async runtime => {
    runtime.objects.JumpSoundTriger.addEventListener("instancecreate", (e) => {
        lib.jump_sound_triger.Triger()
        runtime.addEventListener("tick", () => {
        })
    })
})
lib.jump_sound_triger = {
    playSound: function (name) {
        lib.c.call("playeSound", name)
    }, playerSoundLoop: function (name) {
        lib.c.call("playeSoundLoop", name)
    }, playeSoundAtObject: function (name, uid) {
        lib.c.call("playeSoundbyobject", name, uid)
    }, playerSoundAtObjectLoop: function (name) {
        lib.c.call("playeSoundbyobjectloop", name, uid)
    },
    Triger: function () {
        lib.addEventListener("pl_in_sound_triger", (e) => {
            var triger = e.detail[0]

            var _soundname = triger.instVars.soundName
            if (_soundname == null) return

            var _type = triger.instVars.type

            var _isOnly = triger.instVars.only

            var _playtimes = triger.instVars.playetimes

            var _SpeakText = triger.instVars.u_speak
            /**@type {ISpriteFontInstance} **/
            if (_type == null) return;
            if (_isOnly) {
                if (_playtimes >= 1) return;
            }

            if (_type == 1) {
                // loop
                this.playeSoundAtObject(_soundname, triger.uid)
                triger.instVars.playetimes += 1
            }

            if (_type == 0) {
                //not loop
                this.playerSoundAtObjectLoop(_soundname, triger.uid)
                triger.instVars.playetimes += 1
            }

            if (_type == 2) {
                lib.say(_SpeakText, "en-US", 1, 1, 1)
                //lib.Uspeak.spk(_u_text, "en-US", 1, 1, 1)
                triger.instVars.playetimes += 1
            }
        })
    }
}