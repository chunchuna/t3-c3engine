runOnStartup(async runtime=>{
        runtime.objects.JumpSoundTriger.addEventListener("instancecreate",(e)=>{
            /**
             *
             * @type {ISpriteInstance}
             */
            //console.log(e)
            var instance =e.instance
            instance.opacity=0
            
        })
})

