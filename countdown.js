input.onButtonPressed(Button.A, function () {
    timer += 1
})
input.onGesture(Gesture.Shake, function () {
    countDown = false
    timer = 0
})
input.onButtonPressed(Button.B, function () {
    if (timer > 0) {
        timer += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (countDown == false) {
        if (!(timer <= 0)) {
            countDown = true
        } else {
            countDown = false
        }
    } else {
        countDown = false
    }
})
let countDown = false
let timer = 0
timer = 0
countDown = false
basic.forever(function () {
    basic.showNumber(timer)
    if (countDown == true) {
        basic.pause(1000)
        timer += -1
        if (timer == 0) {
            countDown = false
        }
    }
})
