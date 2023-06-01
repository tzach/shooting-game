radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (status == 2) {
            basic.showIcon(IconNames.No)
            radio.sendNumber(2)
            basic.pause(100)
            music.playTone(698, music.beat(BeatFraction.Whole))
        } else if (false) {
        	
        } else {
            status = 3
            diaplayStatus(status)
            radio.sendNumber(3)
            music.playTone(330, music.beat(BeatFraction.Breve))
            basic.pause(10000)
            init()
        }
    } else {
        if (receivedNumber == 3) {
            basic.showIcon(IconNames.Yes)
            basic.pause(500)
        } else {
            basic.showIcon(IconNames.No)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (status == 1) {
        radio.sendNumber(1)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(165, music.beat(BeatFraction.Whole))
    }
    status = 0
    basic.pause(1000)
    diaplayStatus(status)
})
function init () {
    basic.showIcon(IconNames.House)
    status = 0
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    diaplayStatus(status)
}
input.onButtonPressed(Button.AB, function () {
    if (status == 0) {
        status = 1
        basic.pause(100)
    } else {
    	
    }
    diaplayStatus(status)
})
input.onButtonPressed(Button.B, function () {
    if (status == 1 || status == 0) {
        status = 2
        diaplayStatus(status)
        basic.pause(5000)
        status = 0
        diaplayStatus(status)
    }
})
function diaplayStatus (s: number) {
    if (status == 0) {
        basic.showIcon(IconNames.Square)
    } else {
        if (status == 1) {
            basic.showIcon(IconNames.SmallDiamond)
        } else {
            if (status == 2) {
                basic.showIcon(IconNames.TShirt)
            } else {
                basic.showIcon(IconNames.Heart)
            }
        }
    }
}
let status = 0
radio.setGroup(1)
init()
