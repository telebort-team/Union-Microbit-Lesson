let y = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    y += 1
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    y = 0
})
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, y)
        basic.pause(500)
        led.unplot(index, y)
    }
})
