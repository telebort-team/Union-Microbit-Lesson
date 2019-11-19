input.calibrateCompass()
basic.forever(function () {
    if (input.compassHeading() >= 340 || input.compassHeading() <= 20) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() >= 70 && input.compassHeading() <= 110) {
        basic.showArrow(ArrowNames.East)
    } else if (input.compassHeading() >= 160 && input.compassHeading() <= 200) {
        basic.showArrow(ArrowNames.South)
    } else if (input.compassHeading() >= 250 && input.compassHeading() <= 290) {
        basic.showArrow(ArrowNames.West)
    } else if (input.compassHeading() > 20 && input.compassHeading() < 70) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (input.compassHeading() > 110 && input.compassHeading() < 160) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (input.compassHeading() > 200 && input.compassHeading() < 250) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (input.compassHeading() > 290 && input.compassHeading() < 340) {
        basic.showArrow(ArrowNames.NorthWest)
    } else {
        basic.showIcon(IconNames.Chessboard)
    }
})
