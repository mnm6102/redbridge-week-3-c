input.onButtonPressed(Button.A, function () {
    motobit.enable(MotorPower.On)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 39)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 0)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    motobit.enable(MotorPower.Off)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    motobit.enable(MotorPower.On)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 0)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 30)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
motobit.enable(MotorPower.Off)
motobit.invert(Motor.Left, true)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
	
})
