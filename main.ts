basic.forever(function () {
    midi.playTone(262, music.beat(BeatFraction.Whole))
    midi.toneOff(262)
    basic.pause(500)
})
