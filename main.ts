function right () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    100
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    55
    )
}
function FR () {
    frontright()
    basic.pause(300)
    go()
    basic.pause(275)
    right()
    basic.pause(500)
    stop()
}
function back () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    135
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    100
    )
}
function FL () {
    frontleft()
    basic.pause(200)
    go()
    basic.pause(400)
    left()
    basic.pause(400)
    stop()
}
function left () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    90
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    50
    )
}
function stop () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    0
    )
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.pause(200)
    basic.clearScreen()
    AAA = 0
    BBB = 0
    go()
    basic.pause(600)
    while (AAA == 0) {
        if (!(pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1)) {
            if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 0) {
                go()
            }
            if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
                right2()
            }
            if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
                left2()
            }
        } else {
            back()
            basic.pause(100)
            stop()
            basic.pause(100)
            AAA = 1
        }
    }
    if (AAA == 1) {
        go()
        basic.pause(650)
        left()
        basic.pause(600)
        stop()
        AAA = 2
    }
    while (AAA == 2) {
        if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1) {
            back()
        } else {
            stop()
            AAA = 3
        }
    }
    if (AAA == 3) {
        back()
        basic.pause(700)
        stop()
        AAA = 4
    }
    if (AAA == 4) {
        go()
        basic.pause(200)
        stop()
        AAA = 5
    }
    while (AAA == 5) {
        if (!(pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1)) {
            if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 0) {
                go()
            }
            if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P8) == 1) {
                right2()
            }
            if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 0) {
                left2()
            }
        } else {
            back()
            basic.pause(100)
            stop()
            basic.pause(100)
            AAA = 6
        }
    }
    if (AAA == 6) {
        go()
        basic.pause(1525)
        stop()
        AAA = 7
    }
    if (AAA == 7) {
        back()
        basic.pause(750)
        right()
        basic.pause(600)
        stop()
        AAA = 8
    }
    while (AAA == 8) {
        if (!(pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1)) {
            go()
        } else {
            stop()
            basic.pause(100)
            AAA = 9
        }
    }
    if (AAA == 9) {
        go()
        basic.pause(400)
        left()
        basic.pause(625)
        go()
        basic.pause(750)
        stop()
        AAA = 10
    }
    if (AAA == 10) {
        back()
        basic.pause(800)
        right()
        basic.pause(650)
        stop()
        AAA = 11
    }
    while (AAA == 11) {
        if (!(pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1)) {
            go()
        } else {
            stop()
            basic.pause(100)
            AAA = 12
        }
    }
    if (AAA == 12) {
        go()
        basic.pause(325)
        left()
        basic.pause(600)
        go()
        basic.pause(700)
        stop()
        AAA = 13
    }
    if (AAA == 13) {
        back()
        basic.pause(1150)
        right()
        basic.pause(600)
        stop()
        AAA = 14
    }
    while (AAA == 14) {
        if (!(pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P8) == 1)) {
            go()
        } else {
            stop()
            basic.pause(100)
            AAA = 15
        }
    }
    if (AAA == 15) {
        go()
        basic.pause(500)
        left()
        basic.pause(600)
        go()
        basic.pause(700)
        stop()
        AAA = 16
    }
    if (AAA == 16) {
        back()
        basic.pause(1150)
        stop()
        AAA = 17
    }
})
function backleft () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    40
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    250
    )
}
function left2 () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    40
    )
}
function backright () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    250
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    40
    )
}
function frontright () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    250
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    40
    )
}
function TB () {
    left()
    basic.pause(1200)
    stop()
}
input.onButtonPressed(Button.B, function () {
    left()
    basic.pause(650)
    stop()
})
function BL () {
    right()
    basic.pause(500)
    back()
    basic.pause(400)
    backleft()
    basic.pause(300)
    stop()
}
function frontleft () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    40
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    250
    )
}
function right2 () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    80
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
}
function BR () {
    left()
    basic.pause(400)
    back()
    basic.pause(500)
    backright()
    basic.pause(200)
    stop()
}
function go () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    145
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    100
    )
}
let BBB = 0
let AAA = 0
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
AAA = 0
BBB = 0
let CCC = 0
let DDD = 0
basic.forever(function () {
	
})
