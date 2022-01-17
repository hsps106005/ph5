input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        ph值 = ph值 + pins.analogReadPin(AnalogPin.P1)
        basic.showNumber(index)
        basic.pause(1000)
    }
    music.playTone(262, music.beat(BeatFraction.Whole))
    ph值 = ph值 / 250
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(ph值)
})
let ph值 = 0
ph值 = 0
