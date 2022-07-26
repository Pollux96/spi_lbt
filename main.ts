function Button_B () {
    if (0 == 0) {
    	
    }
    while (keep_inside == 1) {
    	
    }
}
input.onButtonPressed(Button.A, function () {
    SpieleSample(145)
})
function Button_A () {
    basic.showIcon(IconNames.Heart)
}
function SpieleSample (sampleCode: number) {
    pins.digitalWritePin(DigitalPin.P6, 0)
    basic.pause(50)
    spi_response = pins.spiWrite(sampleCode)
    basic.pause(50)
    pins.digitalWritePin(DigitalPin.P6, 1)
    basic.pause(1000)
}
let spi_response = 0
let keep_inside = 0
pins.setAudioPin(AnalogPin.P0)
music.playTone(330, music.beat(BeatFraction.Whole))
pins.setPull(DigitalPin.P6, PinPullMode.PullUp)
pins.setPull(DigitalPin.P4, PinPullMode.PullUp)
pins.spiPins(DigitalPin.P15, DigitalPin.P14, DigitalPin.P13)
pins.spiFormat(8, 0)
pins.spiFrequency(100000)
SpieleSample(168)
SpieleSample(0)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P4) < 600) {
        keep_inside = 1
        Button_A()
    } else if (pins.analogReadPin(AnalogPin.P4) < 520) {
        Button_B()
    } else if (pins.analogReadPin(AnalogPin.P4) < 500) {
    	
    } else if (pins.analogReadPin(AnalogPin.P4) < 400) {
    	
    } else if (pins.analogReadPin(AnalogPin.P4) < 50) {
    	
    }
})
