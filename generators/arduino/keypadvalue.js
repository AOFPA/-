// * Bloce Value
Blockly.Arduino.KEYPAD_VALUE = function (block) {
    const unit = block.getFieldValue('unit');
    const pin = block.getFieldValue('pin');
    // TODO: Assemble JavaScript into code variable.
    let code = `${pin}`;
    // TODO: Change ORDER_NONE to the correct strength.
    // printf(cel_2)
    return [code];

    //return [code, Blockly.Arduino.ORDER_NONE];
    //ex. printf((cel_2))
};