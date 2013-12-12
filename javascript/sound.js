// immediate function
document.Sound = (function () {

    var BUZZ_NEW_SOUND_OPTIONS = {
        preload: true,
        autoplay: false,
    };

    // initialize an array containing sound objects for a scale
    var soundNames = [
	{
                            groupName : "pause1", 
                            sampleNames : ["pause"]
                        },
                        {
                            groupName : "voiceFX1", 
                            sampleNames : ["ChoirHit", "HeyBuddy"]
                        },
                        {
                            groupName : "sinusSynth4", 
                            sampleNames : ["c4", "cis4", "d4", "dis4", "e4", "f4", "fis4", "g4", "gis4", "a4", "ais4", "b4"]
                        },
                        {
                            groupName : "sinusSynth3",
                            sampleNames : ["c3", "cis3", "d3", "dis3", "e3", "f3", "fis3", "g3", "gis3", "a3", "ais3", "b3"]
                        },
						{
                            groupName : "Snare1", 
                            sampleNames : ["BasicClap2", "Clap1", "Snare1", "Snare2", "Snare5", "TrapClap4", "YoungChopSnr7"]
                        },
						 {
                            groupName : "HH1", 
                            sampleNames : ["HH1", "HH2", "HH3", "YChopHat3"]
                        },
						{
                            groupName : "percussion1", 
                            sampleNames : ["Timpani", "Ting", "TrapPerc2"]
                        },
						{
                            groupName : "Base1", 
                            sampleNames : ["Kick1", "Kick2", "Kick3", "Stomp", "YchopHardKick5"]
                        }
                     ];
    var sounds = {};
    for (var i = soundNames.length; i--; ) {

        var groupName = soundNames[i]["groupName"];
        var samples = [];
        
        for (var j = 0; j < soundNames[i]["sampleNames"].length; j++) {
            var sampleName = soundNames[i]["sampleNames"][j];
            
            samples.push({
                buzzObject: getSoundObject(groupName, sampleName),
                name: sampleName
            });
        }

        sounds[groupName] = samples;
    }

    function getSoundObject (group, name) {
        //console.log("get sound: " + group + "/" + name + ".mp3");
        return new buzz.sound("audio-samples/" + group + "/" + name + ".mp3", BUZZ_NEW_SOUND_OPTIONS);
    }

    function getNewSoundObjectForCurrentSound () {
        return getSoundObject(
            document.Sound.currentSelection["groupName"],
            document.Sound.currentSelection["sampleName"]
            );
    }

    function toggleSound () {
        module.isSoundOn = !module.isSoundOn;
    }

    // module object; add all methods and properties that should be visible globally
    var module = {};
    module.sounds = sounds;
    module.getSoundObject = getSoundObject;
    module.getNewSoundObjectForCurrentSound = getNewSoundObjectForCurrentSound;
    module.currentSelection = {groupName: undefined, sampleName: undefined};
    module.isSoundOn = true;
    module.toggleSound = toggleSound;
    return module;
})();