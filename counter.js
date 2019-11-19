input.onButtonPressed(Button.B, function () {
    counting = true
    while (count > 0) {
        basic.clearScreen()
        count += -1
        basic.showNumber(count)
        basic.pause(1000)
    }
    counting = false
})
input.onButtonPressed(Button.A, function () {
    if (!(counting)) {
        count += 1
        basic.showNumber(count)
    }
})
let counting = false
let count = 0
count = 0
basic.showNumber(count)
