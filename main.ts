bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Heart)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        SuperBit.MotorRun(SuperBit.enMotors.M2, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        SuperBit.MotorRun(SuperBit.enMotors.M2, -100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        SuperBit.MotorRun(SuperBit.enMotors.M4, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        SuperBit.MotorRun(SuperBit.enMotors.M4, -100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, -100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        SuperBit.MotorRun(SuperBit.enMotors.M3, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        SuperBit.MotorRun(SuperBit.enMotors.M3, -100)
    } else {
        SuperBit.MotorStopAll()
    }
})
