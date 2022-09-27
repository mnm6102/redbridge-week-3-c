input.onButtonPressed(Button.A, function () {
    motobit.enable(MotorPower.On)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 30)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 30)
})
input.onButtonPressed(Button.B, function () {
    motobit.enable(MotorPower.Off)
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
