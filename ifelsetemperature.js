basic.forever(function () {
    basic.clearScreen()
    basic.showString("" + input.temperature())
    if (input.temperature() < 30) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(500)
})