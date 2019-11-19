let hand = 0
input.onGesture(Gesture.Shake, function () {
    hand = Math.randomRange(1, 3)
    if (hand == 1) {
        basic.showIcon(IconNames.Square)
    } else if (hand == 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
