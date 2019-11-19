let counter = 0
input.onButtonPressed(Button.A, function () {
    devices.tellCameraTo(MesCameraEvent.LaunchPhotoMode)
    counter = 5
    while (counter >= 0) {
        basic.pause(1000)
        basic.showString("" + counter)
        counter += -1
    }
    devices.tellCameraTo(MesCameraEvent.TakePhoto)
})
