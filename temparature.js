input.onButtonPressed(Button.A, function () {
    display = true
    basic.clearScreen()
    basic.showString("" + input.temperature())
    display = false
})
let display = false
display = false
basic.forever(function () {
    if (display == false) {
        led.plotBarGraph(
        input.temperature(),
        40
        )
    }
})
